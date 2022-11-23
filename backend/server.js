//import modules
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';

//setup prisma client
const prismaClient = new PrismaClient();

//graphql
const typeDefs=`#graphql
  type Query {
    categories: [Category]
    rooms(category_id: Int): [Room]
  }

  type Category {
    id: ID
    name: String,
    img_src: String
    img_alt: String
    cost: Float
    room: [Room]
  }

  type Room {
    number: String
    is_available: Int
  }
`;

const resolvers={
  Query: {
    // { categories { name cost } }
    categories: async(parent, args, context)=>{ 
      const categories = await prismaClient.category.findMany({     
        include: {
          room: true,
          locale_category: {
            where: {
              locale: {
                name: context.language
              }
            }
          }
        }
      });

      return localeDataMerge(categories);
    },
    // { rooms(category_id:3) { number is_available } }
    rooms: async(parent, args, context)=>{
      const rooms = await prismaClient.room.findMany({
        where: {
          category_id: args.category_id 
        }
      });

      return rooms;
    }
  }
};

const appoloServer=new ApolloServer({
  typeDefs,
  resolvers
});

// multilanguage support
function localeDataMerge(data) {
  if(Array.isArray(data))
    for(let i=0; i<data.length; i++)
      Object.keys(data[i]).filter(key=>key.startsWith("locale_")).forEach(key=>{
        if(data[i][key].length>0)
          data[i]={...data[i], ...data[i][key][0]}
      });
  return data;
}

// start graphql server
const { url } = await startStandaloneServer(appoloServer, {
  listen: { port: 4000 },
  context: async ({req, res})=>({language: req.headers['accept-language']})//req.headers["Accetp-Language"]})
});

console.log(`🚀Server ready at: ${url}`);

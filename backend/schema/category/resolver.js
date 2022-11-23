
const prisma = require('../../prisma/prismaClient');
const db = new prisma().getInstance();
module.exports= {
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

      return prisma.localeDataMerge(categories);
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
}



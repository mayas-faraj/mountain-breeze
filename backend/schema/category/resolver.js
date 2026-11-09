
const prisma = require('../../prisma/prismaClient');
const db = new prisma().getInstance();
module.exports= {
    Query: {
        getAllCategories: async(parent, args, context)=>{ 
        console.log(context.language)
          const categories = await db.category.findMany({     
            include: {
                room: true,
                locale_category: {
                    where: {
                        locale: {
                            name: context.language
                        }
                    },
                    select: {
                        name: true
                    }
                }
            }});
                
            for(let i=0; i<categories.length; i++)
                categories[i].name= categories[i].locale_category.length>0?categories[i].locale_category[0].name:"<TRANS-ERROR>";
            return categories;
            }
    }
}



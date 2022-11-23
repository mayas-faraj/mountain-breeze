
const prisma = require('../../prisma/prismaClient');
const db = new prisma().getInstance();
module.exports= {
  Query: {
    // { categories { name cost } }
    getAllCategories: async(parent, args, context)=>{ 
      const categories = await db.category.findMany({     
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
  }
}



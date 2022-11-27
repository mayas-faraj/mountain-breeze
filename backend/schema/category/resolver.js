const Prisma = require('../../prisma/prismaClient');
const db = new Prisma().getInstance();
module.exports= {
  Query: {
    // { getAllCategories { name cost } }
    getAllCategories: async(parent, args, context)=>{ 
      const categories = await db.category.findMany({     
        include: {
          locale_category: {
            where: {
              locale: {
                name: context.language
              }
            }
          }
        }
      });

      return Prisma.localeDataMerge(categories);
    },
  }
}



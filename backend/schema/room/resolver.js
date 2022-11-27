const Prisma = require('../../prisma/prismaClient');
const db = new Prisma().getInstance();

module.exports= {
    Query: {
      // { getRoomsByCategoryId(categoryId:3) { number is_available } }
      getRoomsByCategoryId: async(parent, args, context)=>{
        const rooms = await db.room.findMany({
          where: {
            category_id: args.categoryId 
          }
        });

        return rooms;
      }
    }
}



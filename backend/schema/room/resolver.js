const prisma = require('../../prisma/prismaClient');
const db = new prisma().getInstance();

module.exports= {
    Query: {
      // { rooms(categoryId:3) { number is_available } }
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



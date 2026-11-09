const prisma = require('../../prisma/prismaClient');
const db = new prisma().getInstance();

module.exports= {
    Query: {
        getAllrooms: async(parent, args, context)=>{ 
            const rooms = await db.room.findMany()
        return rooms;
      
      }
    }
}



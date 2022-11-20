const { PrismaClient } = require('@prisma/client')

class prisma {
    constructor() {
        if (!prisma.db) {
            prisma.db = new PrismaClient();
            console.log('connected to prisma client');
        }
    }
  
    getInstance() {
        return prisma.db;
    }
  
}

module.exports = prisma;
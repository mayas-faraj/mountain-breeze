//Prisma client
const prisma = require('../../prisma/prismaClient');
const db = new prisma().getInstance();

module.exports = {
    Mutation: {
        async createMenu(_, {menuinput: { name} }) {
            const menu = await db.menu.create({
                data: {
                    name: name,
                  },
            })
            return {
                id: menu.id,
                name: menu.name
            };
        }
    },
    Query: {
        getMenuByID: async (_,{id}) => {
            const menu = await db.menu.findUnique({
            where: {
              id: parseInt(id),
            }
          })
          return menu
        }
    }
}
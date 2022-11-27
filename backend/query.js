const { PrismaClient } = require("@prisma/client");
const prisma=new PrismaClient();
prisma.menu_item.findMany({}).then(d=>console.dir(d));

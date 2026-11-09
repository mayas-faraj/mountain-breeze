const { PrismaClient } = require("@prisma/client");
const prisma=new PrismaClient();
prisma.venue.findMany({}).then(d=>console.dir(d));

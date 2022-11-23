const { PrismaClient } = require('@prisma/client')

class prisma {
  constructor() {
      if (!prisma.db) {
          prisma.db = new PrismaClient();
      }
  }

  getInstance() {
      return prisma.db;
  }
  
  // multilanguage support
  function localeDataMerge(data) {
    if(Array.isArray(data))
      for(let i=0; i<data.length; i++)
        Object.keys(data[i]).filter(key=>key.startsWith("locale_")).forEach(key=>{
          if(data[i][key].length>0)
            data[i]={...data[i], ...data[i][key][0]}
        });
    return data;
  }


}

module.exports = prisma;

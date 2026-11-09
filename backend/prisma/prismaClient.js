const { PrismaClient } = require('@prisma/client')

class Prisma {
  constructor() {
      if (!Prisma.db) {
          Prisma.db = new PrismaClient();
      }
  }

  getInstance() {
      return Prisma.db;
  }
  
  // multilanguage support
  static localeDataMerge(data) {
    if(Array.isArray(data))
      for(let i=0; i<data.length; i++)
        data[i]=_localeDataMerge(data[i]);
    else
        data=_localeDataMerge(data);
    return data;
  
    function _localeDataMerge(data) {
      if(data)
        Object.keys(data).forEach(key=>{
          if(key.startsWith("locale_")) {
            if(data[key].length>0) {
              let localeObj=data[key][0];
              delete data[key]
              delete localeObj.locale_id;
              data={...data, ...localeObj};
            }
          }
          else if(typeof(data[key])=="object") {
            data[key]=_localeDataMerge(data[key]);
          }
        });
        return data;
      }
  }
}

module.exports = Prisma;

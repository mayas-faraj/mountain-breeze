//Prisma client
const Prisma = require('../../prisma/prismaClient');
const db = new Prisma().getInstance();

module.exports = {
  Query: {
    getMenuByName: async (parent, args, context)=>{
      const menu = await db.menu.findUnique({
        where: {
          name: args.name
        },
        include: {
          menu_item: {
            orderBy: {
              display_order: 'asc'
            },
            include: {
              locale_menu_item: {
                where: {
                  locale: {
                    name: context.language
                  }
                }
              },
              menu_item_url: {
                select: {
                  url: true
                }
              },
              menu_item_page: {
                include: {
                  page: {
                    select: {
                      slug: true
                    }
                  }
                }
              }
            }
          },
        }
      });
      if(menu.menu_item)
        for(let i=0; i<menu.menu_item.length; i++) {
          menu.menu_item[i].url=menu.menu_item[i].menu_item_url?menu.menu_item[i].menu_item_url.url:"";
          menu.menu_item[i].slug=menu.menu_item[i].menu_item_page?menu.menu_item[i].menu_item_page.page.slug:"";
          delete menu.menu_item[i].menu_item_url;
          delete menu.menu_item[i].menu_item_page;
        }
      return Prisma.localeDataMerge(menu);
    }
  }
}

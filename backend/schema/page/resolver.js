const Prisma = require('../../prisma/prismaClient');
const db = new Prisma().getInstance();

module.exports= {
    Query: {
      // { getPageBySlug(slug:"about-us") { title feature_img_src feature_img_alt og_image section { name display_order content button_link button_text section_image { img_src img_alt title } } } }
      getPageBySlug: async(parent, args, context)=>{
        const page = await db.page.findUnique({
          where: {
            slug: args.slug
          },
          include: {
            section: {
              include: {
                locale_section: {
                  where: {
                    locale: {
                      name: context.language
                    }
                  }
                },
                section_image: {
                  include: {
                    locale_section_image: {
                      where: {
                        locale: {
                          name: context.language
                        }
                      }
                    }
                  }
                }
              }
            },
            locale_page: {
              where: {
                locale: {
                  name: context.language
                }
              }
            }
          }
        });
        console.dir(Prisma.localeDataMerge(page), {depth: null});
        return Prisma.localeDataMerge(page);
      }
    }
}



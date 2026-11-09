//  import modules
const { PrismaClient } = require('@prisma/client')

// initalize client
const prismaClient = new PrismaClient()

// create data
createAll()
async function createAll () {
  await createData('locale', [
    {
      id: 1,
      name: 'en-US',
      currency_symbol: '$',
      currency_rate: 1,
      date_format: 'MM-D-YYYY'
    },
    {
      id: 2,
      name: 'ar-SY',
      currency_symbol: 'ل.س.',
      currency_rate: 0.000192307692308,
      date_format: 'D/MM/YYYY'
    }
  ])

  await createData('setting', [
    { name: 'logo', value: '/assets/imgs/logo.png' },
    { name: 'copywrite', value: '© The Rooster 2022' },
    { name: 'website-title', value: 'Mountain Breeze' },
    { name: 'booking-title', value: 'book now' }
  ])

  await createData('user', [
    {
      first_name: 'Mayas',
      last_name: 'Faraj',
      username: 'mayas-faraj',
      password: '',
      email: 'm.faraj@samagroup.sy',
      phone_number: '0960009710'
    },
    {
      first_name: 'Laith',
      last_name: 'Salameh',
      username: 'laith-salameh',
      password: '',
      email: 'laith-salameh@samagroup.sy',
      phone_number: '0933112233'
    },
    {
      first_name: 'Zaher',
      last_name: 'Alqatsha',
      username: 'zaher-qatsha',
      password: '',
      email: 'zaher.qatsha@gmail.com',
      phone_number: '0912121212'
    }
  ])

  await createData('status', {
    id: 1,
    locale_status: {
      create: [
        { name: 'waiting', locale_id: 1 },
        { name: 'قيد الانتظار', locale_id: 2 }
      ]
    }
  })

  await createData('status', {
    id: 2,
    locale_status: {
      create: [
        { name: 'reserved', locale_id: 1 },
        { name: 'محجوز', locale_id: 2 }
      ]
    }
  })

  await createData('status', {
    id: 3,
    locale_status: {
      create: [
        { name: 'canceled', locale_id: 1 },
        { name: 'ملغى', locale_id: 2 }
      ]
    }
  })

  await createData('type', [
    { id: 1, name: 'venue' },
    { id: 2, name: 'resturant' },
    { id: 3, name: 'swimming-bool' }
  ])

  await createData('venue', {
    slug: 'venue-main',
    contact: '0933112233',
    type_id: 1,
    locale_venue: {
      create: [
        {
          name: 'main venu',
          description: 'any description of the main venu',
          locale_id: 1
        },
        {
          name: 'القاعة الرئيسية',
          description: 'وصف القاعة الرئيسية',
          locale_id: 2
        }
      ]
    },
    venue_image: {
      create: [
        {
          img_src: '/assets/imgs/venue/main.jpg',
          img_alt: 'venu main image of mountain breeze',
          locale_venue_image: {
            create: [
              { title: 'venue main image', locale_id: 1 },
              { title: 'الصورة الرئيسية للقاعة', locale_id: 2 }
            ]
          }
        },
        {
          img_src: '/assets/imgs/venue/other.jpg',
          img_alt: 'venu other image of mountain breeze',
          locale_venue_image: {
            create: [
              { title: 'side image of the venue', locale_id: 1 },
              { title: 'صورة جانبية للقاعة', locale_id: 2 }
            ]
          }
        }
      ]
    }
  })

  await createData('venue', {
    slug: 'resturant1',
    contact: '0933445566',
    type_id: 2,
    catalog_file: '/catalogs/res1.pdf',
    locale_venue: {
      create: [
        {
          name: 'resturant1',
          description: 'any description of the resturant1',
          locale_id: 1
        },
        { name: 'مطعم 1', description: 'وصف المطعم الاول', locale_id: 2 }
      ]
    },
    venue_image: {
      create: [
        {
          img_src: '/assets/imgs/venue/rest1.jpg',
          img_alt: 'first resturant image of mountain breeze'
        },
        {
          img_src: '/assets/imgs/venue/rest2.jpg',
          img_alt: 'first resturant image of mountain breeze'
        },
        {
          img_src: '/assets/imgs/venue/rest3.jpg',
          img_alt: 'first resturant image of mountain breeze'
        }
      ]
    }
  })

  await createData('venue', {
    slug: 'resturant2',
    contact: '0933778899',
    type_id: 2,
    catalog_file: '/catalogs/res2.pdf',
    locale_venue: {
      create: [
        {
          name: 'resturant2',
          description: 'any description of the resturant2',
          locale_id: 1
        },
        { name: 'مطعم 2', description: 'وصف المطعم الثاني', locale_id: 2 }
      ]
    }
  })

  await createData('venue', {
    slug: 'swimming-bool',
    contact: '0933112235',
    type_id: 3,
    locale_venue: {
      create: [
        {
          name: 'swimming bool',
          description: 'any description of the swimming bool',
          locale_id: 1
        },
        { name: 'مسبح', description: 'حوض سباحة للنزلاء', locale_id: 2 }
      ]
    },
    venue_image: {
      create: [
        {
          img_src: '/assets/imgs/venue/sw1.jpg',
          img_alt: 'venu swimming bool first image of mountain breeze'
        },
        {
          img_src: '/assets/imgs/venue/sw2.jpg',
          img_alt: 'venu swimming bool second image of mountain breeze'
        },
        {
          img_src: '/assets/imgs/venue/sw3.jpg',
          img_alt: 'venu swimming bool third image of mountain breeze'
        }
      ]
    }
  })

  await createData('category', {
    img_src: '/assets/imgs/category/room.jpg',
    img_alt: 'mountain breeze room',
    cost: 200000,
    room: {
      create: [
        { number: '100' },
        { number: '101' },
        { number: '102' },
        { number: '103' },
        { number: '104' },
        { number: '105' },
        { number: '106' },
        { number: '107' },
        { number: '108' },
        { number: '109' },
        { number: '110', is_available: 0 }
      ]
    },
    locale_category: {
      create: [
        { name: 'room', locale_id: 1 },
        { name: 'غرفة', locale_id: 2 }
      ]
    }
  })

  await createData('category', {
    img_src: '/assets/imgs/category/suit.jpg',
    img_alt: 'mountain breeze suit',
    cost: 300000,
    room: {
      create: [
        { number: '200' },
        { number: '201' },
        { number: '202' },
        { number: '203' },
        { number: '204' },
        { number: '205' },
        { number: '206' },
        { number: '208', is_available: 0 }
      ]
    },

    locale_category: {
      create: [
        { name: 'suit', locale_id: 1 },
        { name: 'جناح', locale_id: 2 }
      ]
    }
  })

  await createData('category', {
    img_src: '/assets/imgs/category/chalet.jpg',
    img_alt: 'mountain breeze chalet',
    cost: 450000,
    room: {
      create: [
        { number: '300' },
        { number: '301' },
        { number: '302' },
        { number: '303' },
        { number: '304' },
        { number: '305' }
      ]
    },

    locale_category: {
      create: [
        { name: 'chalet', locale_id: 1 },
        { name: 'شاليه', locale_id: 2 }
      ]
    }
  })

  await createData('service', {
    img_src: '/assets/imgs/service/massage.jpg',
    img_alt: 'mountain breez massage service',
    cost: 100000,
    locale_service: {
      create: [
        {
          name: 'massage',
          description: 'any description for massage service',
          locale_id: 1
        },
        { name: 'مساج', description: 'مميزات خدمة المساج', locale_id: 2 }
      ]
    }
  })

  await createData('service', {
    img_src: '/assets/imgs/service/bronzing.jpg',
    img_alt: 'mountain breez bronzing service',
    cost: 200000,
    locale_service: {
      create: [
        {
          name: 'bronzing',
          description: 'any description for bronzing service',
          locale_id: 1
        },
        { name: 'برونزاج', description: 'وصف خدمة البرونزاج', locale_id: 2 }
      ]
    }
  })

  await createData('service', {
    img_src: '/assets/imgs/service/extra-bed.jpg',
    img_alt: 'mountain breez extra-bed service',
    cost: 50000,
    locale_service: {
      create: [
        {
          name: 'extra-bed',
          description: 'any description for extra bed service',
          locale_id: 1
        },
        {
          name: 'سرير اضافة',
          description: 'سرير اضافي اثناء حجز الغرفة',
          locale_id: 2
        }
      ]
    }
  })

  await createData('contact', [
    {
      name: 'facebook',
      icon: 'fa-facebook',
      link: 'https:// www.facebook.com/mountain-breez',
      is_social: 1
    },
    {
      name: 'twitter',
      icon: 'fa-twitter',
      link: 'https:// www.twitter.com/mountain-breez',
      is_social: 1
    },
    {
      name: 'instagram',
      icon: 'fa-instagram',
      link: 'https:// www.instagram.com/mountain-breez',
      is_social: 1
    },
    {
      name: 'linkedin',
      icon: 'fa-linkedin',
      link: 'https:// www.linkedin.com/mountain-breez',
      is_social: 1
    },
    { name: 'phone', icon: 'fa-call', link: 'tel:+96311343434', is_social: 0 },
    {
      name: 'email',
      icon: 'fa-envlope',
      link: 'mailto:m.breez@hotmail.com',
      is_social: 0
    },
    {
      name: 'address',
      icon: 'fa-location',
      link: 'https:// maps.google.com/2375y24',
      is_social: 0
    }
  ])

  await createData('menu', [
    { id: 1, name: 'main-menu' },
    { id: 2, name: 'footer-menu' }
  ])

  await createData('page', {
    slug: '/',
    feature_img_src: '/assets/imgs/covers/home-cover-wide.jpg',
    feature_img_alt: 'mountain breeze hotel',
    og_image: '/assets/imgs/covers/home-cover.jpg',
    locale_page: {
      create: [
        { locale_id: 1, title: 'home' },
        { locale_id: 2, title: 'الصفحة الرئيسية' }
      ]
    },
    section: {
      create: [
        {
          name: 'intro',
          display_order: 0,
          locale_section: {
            create: [
              {
                locale_id: 1,
                content:
                  'There is a place hidden as a gem on a tiny Greek island, The Rooster is to arrive from a life’s vision of a long awaited wake up call.<br/><br/>A call that begins from our roots and leads us to our destiny to become who we are truly meant to be.<br/><br/>In quietness, wellbeing of our body, mind and spirit, homegrown culinary ingredients and daily activations, The Rooster team encourages you to connect with, Our House of Healing, Our Landscapes’ Escapes, Our Houses, Our Secret Garden, Our Farm and our tailor made Days In The Rooster. '
              },
              {
                locale_id: 2,
                content:
                  'هناك مكان مخفي كجوهرة في جزيرة يونانية صغيرة ، The Rooster سيصل من رؤية الحياة لنداء إيقاظ طال انتظاره. مكالمة تبدأ من جذورنا وتقودنا إلى مصيرنا لنصبح ما نحن عليه حقًا. في هدوء ، رفاهية أجسادنا وعقلنا وروحنا ، ومكونات الطهي المحلية والتنشيط اليومي ، يشجعك فريق Rooster على التواصل مع ، بيت الشفاء لدينا ، مناظرنا الطبيعية ، منازلنا ، حديقتنا السرية ، مزرعتنا وأيامنا المصممة خصيصًا في الديك.'
              }
            ]
          },
          section_image: {
            create: [
              {
                img_src: '/assets/imgs/outside/rock1.jpg',
                img_alt: 'first rock'
              },
              {
                img_src: '/assets/imgs/outside/rock2.jpg',
                img_alt: 'second rock'
              }
            ]
          }
        },
        {
          name: 'desc1',
          display_order: 1,
          button_link: '/explore',
          section_image: {
            create: [
              { img_src: '/assets/imgs/outside/rock1.jpg', img_alt: 'صخرة 1' },
              { img_src: '/assets/imgs/outside/rock2.jpg', img_alt: 'صخرة 2' }
            ]
          },
          locale_section: {
            create: [
              {
                locale_id: 1,
                content:
                  'The Rooster is built within a 30 acre land of hills, ruins, rocks and sand dunes located above Livadia, a magical unspoilt beach.  Superbly camouflaged 16 private houses are built to blend and not to interrupt.  This building structure creates a respectful feel towards the islands’ aesthetic and heritage.  Sharing elements such as evergreens’ smells, natures’ sounds of the salty wind, glimpses & portraits of the tranquil and wild majestic sea, the colorful sunset pallets of the sky.',
                button_text: 'explore'
              },
              {
                locale_id: 2,
                content:
                  'تم بناء The Rooster على مساحة 30 فدانًا من التلال والآثار والصخور والكثبان الرملية الواقعة فوق ليفاديا ، وهو شاطئ سحري غير ملوث. تم بناء 16 منزلًا خاصًا مموهًا بشكل رائع للاندماج وعدم المقاطعة. يخلق هيكل المبنى هذا إحساسًا محترمًا تجاه جماليات الجزيرة وتراثها ، حيث تشارك العناصر مثل روائح الخضرة ، وأصوات الطبيعة للرياح المالحة ، ولمحات وصور من البحر المهيب الهادئ والبرية ، ومنصات غروب الشمس الملونة في السماء.',
                button_text: 'استكشف المزيد'
              }
            ]
          }
        }
      ]
    }
  })

  await createData('page', {
    slug: 'contact',
    feature_img_src: '/assets/imgs/covers/contact-cover-wide.jpg',
    feature_img_alt: 'mountain breeze contact page',
    og_image: '/assets/imgs/covers/contact-cover.jpg',
    locale_page: {
      create: [
        { locale_id: 1, title: 'Get in touch' },
        { locale_id: 2, title: 'ابقا على تواصل معنا' }
      ]
    },
    section: {
      create: [
        {
          name: 'intro',
          display_order: 0,
          locale_section: {
            create: [
              {
                locale_id: 1,
                content: 'If you have any question please fill the form bellow<br/>[contact-form]'
              },
              {
                locale_id: 2,
                content: 'ان كان لديك أي سؤال يرجى ملئ النموذج التالي<br/>[contact-form]'
              }
            ]
          },
          section_image: {
            create: [
              {
                img_src: '/assets/imgs/contact/callus.jpg',
                img_alt: 'contact us'
              }
            ]
          }
        }
      ]
    }
  })
}

async function createData (table, data) {
  console.log(`creating ${table} data: `)
  // cleaning data
  const tables = new Set()
  if (!Array.isArray(data)) getTables(data, tables)
  tables.add(table)
  // tables.forEach(async table=>await prismaClient[table].deleteMany({}));
  // creating data
  let result = ''
  if (Array.isArray(data)) { result = await prismaClient[table].createMany({ data }) } else result = await prismaClient[table].create({ data })
  console.log(result, ' has been added.')
}

function getTables (data, tables) {
  if (typeof data === 'object') {
    Object.keys(data).forEach((element) => {
      if (
        typeof data[element] === 'object' &&
        data[element].create !== undefined
      ) {
        tables.add(element)
      }
      getTables(data[element], tables)
    })
  }
}

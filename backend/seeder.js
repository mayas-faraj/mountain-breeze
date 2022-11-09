//  import modules
const { PrismaClient } = require("@prisma/client")

// initalize client
const prismaClient = new PrismaClient()

// create data
createAll();
async function createAll() {
	await createData("locale", [
		{"id": 1, "name": "en-US", "currency_symbol": "$", "currency_rate": 1, "date_format": "MM-D-YYYY"},
		{"id": 2, "name": "ar-SY", "currency_symbol": "ل.س.", "currency_rate": 0.000192307692308, "date_format": "D/MM/YYYY"}
	]);

	await createData("setting", [
		{ "name": "logo", "value": "/assets/imgs/logo.png"},
		{ "name": "copywrite", "value": "© The Rooster 2022"},
		{ "name": "website-title", "value": "Mountain Breeze"},
		{ "name": "booking-title", "value": "book now"}
	]);

	await createData("user", [
		{ "first_name": "Mayas", "last_name": "Faraj", "username": "mayas-faraj", "password": "", "email": "m.faraj@samagroup.sy", "phone_number": "0960009710"},
		{ "first_name": "Laith", "last_name": "Salameh", "username": "laith-salameh", "password": "", "email": "laith-salameh@samagroup.sy", "phone_number": "0933112233"},
		{ "first_name": "Zaher", "last_name": "Alqatsha", "username": "zaher-qatsha", "password": "", "email": "zaher.qatsha@gmail.com", "phone_number": "0912121212"}
	]);

	await createData("status", {
		"id": 1,
		"locale_status": {
			"create" : [
				{"name": "waiting", "locale_id": 1},
				{"name": "قيد الانتظار", "locale_id": 2}
			]
		}
	});

	await createData("status", {
		"id": 2,
		"locale_status": {
			"create" : [
				{"name": "reserved", "locale_id": 1},
				{"name": "محجوز", "locale_id": 2}
			]
		}	
	});

	await createData("status", {
		"id": 3,
		"locale_status": {
			"create": [
				{"name": "canceled", "locale_id": 1},
				{"name": "ملغى", "locale_id": 2},
			]
		}
	});

	await createData("type", [
		{ "id": 1, "name": "venue"},
		{ "id": 2, "name": "resturant"},
		{ "id": 3, "name": "swimming-bool"},
	]);

	await createData("venue", { 
			"slug": "venue-main", 
			"contact": "0933112233", 
			"type_id": 1,
			"locale_venue": {
				"create": [
					{ "name": "main venu", "description": "any description of the main venu", "locale_id": 1 },
					{ "name": "القاعة الرئيسية", "description": "وصف القاعة الرئيسية", "locale_id": 2 }
				]
			},
			"venue_image": {
				"create": [
					{ 
						"img_src": "/assets/imgs/venue/main.jpg", 
						"img_alt": "venu main image of mountain breeze",
						"locale_venue_image": {
							"create": [
								{"title": "venue main image", "locale_id": 1}, 	
								{"title": "الصورة الرئيسية للقاعة", "locale_id": 2}
							]	
						}
					},	
					{ 
						"img_src": "/assets/imgs/venue/other.jpg", 
						"img_alt": "venu other image of mountain breeze",
						"locale_venue_image": {
							"create": [
								{"title": "side image of the venue", "locale_id": 1}, 	
								{"title": "صورة جانبية للقاعة", "locale_id": 2}, 	
							]	
						}
					}
				]
			}
		}
	);

	await createData("venue", { 
			"slug": "resturant1", 
			"contact": "0933445566", 
			"type_id": 2, 
			"catalog_file": "/catalogs/res1.pdf", 
			"locale_venue": {
				"create": [
					{"name": "resturant1", "description": "any description of the resturant1", "locale_id": 1} , 
					{"name": "مطعم 1", "description": "وصف المطعم الاول", "locale_id": 2} 
				]
			},
			"venue_image": {
				"create": [
					{ "img_src": "/assets/imgs/venue/rest1.jpg", "img_alt": "first resturant image of mountain breeze"},	
					{ "img_src": "/assets/imgs/venue/rest2.jpg", "img_alt": "first resturant image of mountain breeze"},	
					{ "img_src": "/assets/imgs/venue/rest3.jpg", "img_alt": "first resturant image of mountain breeze"}
				] }
		}
	);

	await createData("venue", {
			"slug": "resturant2",
			"contact": "0933778899", 
			"type_id": 2, 
			"catalog_file": "/catalogs/res2.pdf",
			"locale_venue": {
				"create": [
					{"name": "resturant2", "description": "any description of the resturant2", "locale_id": 1}, 
					{"name": "مطعم 2", "description": "وصف المطعم الثاني", "locale_id": 2}
				]
			}
		}
	);

	await createData("venue", { 
			"slug": "swimming-bool", 
			"contact": "0933112235", 
			"type_id": 3, 
			"locale_venue": {
				"create": [
					{"name": "swimming bool", "description": "any description of the swimming bool", "locale_id": 1}, 
					{"name": "مسبح", "description": "حوض سباحة للنزلاء", "locale_id": 2}, 
				]
			},
			"venue_image": {
				"create": [
					{ "img_src": "/assets/imgs/venue/sw1.jpg", "img_alt": "venu swimming bool first image of mountain breeze"},
					{ "img_src": "/assets/imgs/venue/sw2.jpg", "img_alt": "venu swimming bool second image of mountain breeze"},
					{ "img_src": "/assets/imgs/venue/sw3.jpg", "img_alt": "venu swimming bool third image of mountain breeze"},
				] 
			}
		}
	);

	await createData("category", { 
		"img_src": "/assets/imgs/category/room.jpg", 
		"img_alt": "mountain breeze room", 
		"cost": 200000, 
		"locale_category": {
			"create": [
				{"name": "room", "locale_id": 1},
				{"name": "غرفة", "locale_id": 2},
			]
		}
	});

	await createData("category", { 
		"img_src": "/assets/imgs/category/suit.jpg", 
		"img_alt": "mountain breeze suit", 
		"cost": 300000, 
		"locale_category": {
			"create": [
				{"name": "suit", "locale_id": 1},
				{"name": "جناح", "locale_id": 2},
			]
		}
	});

	await createData("category", { 
		"img_src": "/assets/imgs/category/chalet.jpg", 
		"img_alt": "mountain breeze chalet", 
		"cost": 450000, 
		"locale_category": {
			"create": [
				{"name": "chalet", "locale_id": 1},
				{"name": "شاليه", "locale_id": 2},
			]
		}
	});

	await createData("service", { 
		"img_src": "/assets/imgs/service/massage.jpg", 
		"img_alt": "mountain breez massage service", 
		"cost": 100000, 
		"locale_service": {
			"create": [
				{"name": "massage", "description": "any description for massage service", "locale_id": 1},
				{"name": "مساج", "description": "مميزات خدمة المساج", "locale_id": 2},
			]
		}
	});

	await createData("service", { 
		"img_src": "/assets/imgs/service/bronzing.jpg", 
		"img_alt": "mountain breez bronzing service", 
		"cost": 200000, 
		"locale_service": {
			"create": [
				{"name": "bronzing", "description": "any description for bronzing service", "locale_id": 1},
				{"name": "برونزاج", "description": "وصف خدمة البرونزاج", "locale_id": 2},
			]
		}

	});

	await createData("service", { 
		"img_src": "/assets/imgs/service/extra-bed.jpg", 
		"img_alt": "mountain breez extra-bed service", 
		"cost": 50000, 
		"locale_service": {
			"create": [
				{"name": "extra-bed", "description": "any description for extra bed service", "locale_id": 1},
				{"name": "سرير اضافة", "description": "سرير اضافي اثناء حجز الغرفة", "locale_id": 2}
			]
		}
	});

	await createData("contact", [
		{ "name": "facebook", "icon": "fa-facebook", "link": "https:// www.facebook.com/mountain-breez", "is_social": 1},
		{ "name": "twitter", "icon": "fa-twitter", "link": "https:// www.twitter.com/mountain-breez", "is_social": 1},
		{ "name": "instagram", "icon": "fa-instagram", "link": "https:// www.instagram.com/mountain-breez", "is_social": 1},
		{ "name": "linkedin", "icon": "fa-linkedin", "link": "https:// www.linkedin.com/mountain-breez", "is_social": 1},
		{ "name": "phone", "icon": "fa-call", "link": "tel:+96311343434", "is_social": 0},
		{ "name": "email", "icon": "fa-envlope", "link": "mailto:m.breez@hotmail.com", "is_social": 0},
		{ "name": "address", "icon": "fa-location", "link": "https:// maps.google.com/2375y24", "is_social": 0}
	]);
}

async function createData(table, data) {
	console.log(`creating ${table} data: `);
	let result = "";
	if(Array.isArray(data)) result = await prismaClient[table].createMany({ data: data });
	else result = await prismaClient[table].create({data: data});
	console.log(result, " has been added.");
}

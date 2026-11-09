CREATE DATABASE mountain_breeze;
USE mountain_breeze;

CREATE TABLE locale (
	id INT AUTO_INCREMENT,
	name CHAR(5),
	currency_symbol VARCHAR(10),
	currency_rate FLOAT DEFAULT 1,
	date_format VARCHAR(20),
	UNIQUE (name),
	UNIQUE (currency_symbol),
	PRIMARY KEY (id)
);

CREATE TABLE category (
	id INT AUTO_INCREMENT,
	img_src VARCHAR(255),
	img_alt VARCHAR(80),
	cost FLOAT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE locale_category (
	id INT AUTO_INCREMENT,
	locale_id INT NOT NULL,
	category_id INT NOT NULL,
	name VARCHAR(100) NOT NULL,
	UNIQUE (name, locale_id),
	FOREIGN KEY (category_id) REFERENCES category(id),
	FOREIGN KEY (locale_id) REFERENCES locale(id),
	PRIMARY KEY (id)	
);

CREATE TABLE room (
	id INT AUTO_INCREMENT,
	category_id INT NOT NULL,
	number VARCHAR(15) NOT NULL,
	is_available INT NOT NULL DEFAULT 1,
	PRIMARY KEY (id),
	UNIQUE (number),
	FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE user (
	id INT AUTO_INCREMENT,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	username VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	email VARCHAR(50),
	phone_number VARCHAR(100) NOT NULL,
	is_disabled INT NULL DEFAULT 0,
	PRIMARY KEY (id),
	UNIQUE (phone_number)
);

CREATE TABLE service (
	id INT AUTO_INCREMENT,
	cost FLOAT DEFAULT 0,
	img_src VARCHAR(255),
	img_alt VARCHAR(80),
	description TEXT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE locale_service (
	id INT AUTO_INCREMENT,
	locale_id INT NOT NULL,
	service_id INT NOT NULL,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(300),
	UNIQUE (name, locale_id),
	FOREIGN KEY (service_id) REFERENCES service(id),
	FOREIGN KEY (locale_id) REFERENCES locale(id),
	PRIMARY KEY (id)	
);

CREATE TABLE status (
	id INT AUTO_INCREMENT,
	PRIMARY KEY (id)
);

CREATE TABLE locale_status (
	id INT AUTO_INCREMENT,
	locale_id INT NOT NULL,
	status_id INT NOT NULL,
	name VARCHAR(100) NOT NULL,
	UNIQUE (name, locale_id),
	FOREIGN KEY (status_id) REFERENCES status(id),
	FOREIGN KEY (locale_id) REFERENCES locale(id),
	PRIMARY KEY (id)	
);

CREATE TABLE booking (
	id INT AUTO_INCREMENT,
	room_id INT,
	user_id INT,
	bill FLOAT DEFAULT 0,
	from_date DATE NOT NULL,
	duration INT DEFAULT 1,
	adultCount INT DEFAULT 1,
	childrenCount INT DEFAULT 0,
	infantsCount INT DEFAULT 0,
	status_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (room_id) REFERENCES room (id),
	FOREIGN KEY (user_id) REFERENCES user (id),
	FOREIGN KEY (status_id) REFERENCES status (id)
);

CREATE TABLE booking_service (
	booking_id INT,
	service_id INT,
	PRIMARY KEY (booking_id, service_id),
	FOREIGN KEY (booking_id) REFERENCES booking(id),
	FOREIGN KEY (service_id) REFERENCES service(id)
);

CREATE TABLE type (
	id INT AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (name)
);

CREATE TABLE venue (
	id INT AUTO_INCREMENT,
	type_id INT,
	slug VARCHAR(255) NOT NULL,
	contact VARCHAR(45),
	catalog_file VARCHAR(255),
	PRIMARY KEY (id),
	FOREIGN KEY (type_id) REFERENCES type (id),
	UNIQUE (slug)
);

CREATE TABLE locale_venue (
	id INT AUTO_INCREMENT,
	locale_id INT NOT NULL,
	venue_id INT NOT NULL,
	name VARCHAR(45) NOT NULL,
	description VARCHAR(45),
	FOREIGN KEY (venue_id) REFERENCES venue(id),
	FOREIGN KEY (locale_id) REFERENCES locale(id),
	PRIMARY KEY (id)	
);

CREATE TABLE venue_image (
	id INT AUTO_INCREMENT,
	img_src VARCHAR(255) NOT NULL,
	img_alt VARCHAR(80) NOT NULL,
	venue_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (venue_id) REFERENCES venue (id) ON DELETE CASCADE
);

CREATE TABLE locale_venue_image (
	id INT AUTO_INCREMENT,
	locale_id INT NOT NULL,
	venue_image_id INT NOT NULL,
	title VARCHAR(100),
	FOREIGN KEY (venue_image_id) REFERENCES venue_image(id),
	FOREIGN KEY (locale_id) REFERENCES locale(id),
	PRIMARY KEY (id)	
);

CREATE TABLE ticket (
	id INT AUTO_INCREMENT,
	message TEXT NOT NULL,
	sent_at DATETIME NOT NULL DEFAULT NOW(),
	user_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);

CREATE TABLE page (
	id INT AUTO_INCREMENT,
	slug VARCHAR(255) NOT NULL,
	feature_img_src VARCHAR(255) NOT NULL,
	feature_img_alt VARCHAR(80) NOT NULL,
	og_image VARCHAR(250),
	PRIMARY KEY (id),
	UNIQUE (slug)
);

CREATE TABLE locale_page (
	id INT AUTO_INCREMENT,
	locale_id INT NOT NULL,
	page_id INT NOT NULL,
	title VARCHAR(255) NOT NULL,
	FOREIGN KEY (page_id) REFERENCES page(id),
	FOREIGN KEY (locale_id) REFERENCES locale(id),
	PRIMARY KEY (id)	
);

CREATE TABLE menu (
	id INT AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (name)
);

CREATE TABLE menu_item (
	id INT AUTO_INCREMENT,
	parent_id INT,
	menu_id INT NOT NULL,
	icon VARCHAR(300),
	display_order INT DEFAULT 0,
	PRIMARY KEY (id),
	FOREIGN KEY (parent_id) REFERENCES menu_item(id),
	FOREIGN KEY (menu_id) REFERENCES menu(id)
);

CREATE TABLE locale_menu_item (
	id INT AUTO_INCREMENT,
	locale_id INT NOT NULL,
	menu_item_id INT NOT NULL,
	title VARCHAR(200),
	FOREIGN KEY (menu_item_id) REFERENCES menu_item(id),
	FOREIGN KEY (locale_id) REFERENCES locale(id),
	PRIMARY KEY (id)	
);

CREATE TABLE menu_item_url (
	menu_item_id INT NOT NULL,
	url VARCHAR(250),
	PRIMARY KEY (menu_item_id),
	FOREIGN KEY (menu_item_id) REFERENCES menu_item(id)
);

CREATE TABLE menu_item_page (
	menu_item_id INT NOT NULL,
	page_id INT,
	PRIMARY KEY (menu_item_id),
	FOREIGN KEY (page_id) REFERENCES page(id),
	FOREIGN KEY (menu_item_id) REFERENCES menu_item(id)
);

CREATE TABLE section (
	id INT AUTO_INCREMENT,
	name VARCHAR(255),
	page_id INT,
	display_order INT DEFAULT 0,
	button_link VARCHAR(255),
	UNIQUE (name, page_id),
	PRIMARY KEY (id),
	FOREIGN KEY (page_id) REFERENCES page (id) ON DELETE CASCADE
);

CREATE TABLE locale_section (
	id INT AUTO_INCREMENT,
	locale_id INT NOT NULL,
	section_id INT NOT NULL,
	content TEXT,
	button_text VARCHAR(50),
	FOREIGN KEY (section_id) REFERENCES section(id),
	FOREIGN KEY (locale_id) REFERENCES locale(id),
	PRIMARY KEY (id)	
);

CREATE TABLE section_image (
	id INT AUTO_INCREMENT,
	img_src VARCHAR(255) NOT NULL,
	img_alt VARCHAR(80) NOT NULL,
	section_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (section_id) REFERENCES section (id) ON DELETE CASCADE
);

CREATE TABLE locale_section_image (
	id INT AUTO_INCREMENT,
	locale_id INT NOT NULL,
	section_image_id INT NOT NULL,
	title VARCHAR(100),
	FOREIGN KEY (section_image_id) REFERENCES section_image(id),
	FOREIGN KEY (locale_id) REFERENCES locale(id),
	PRIMARY KEY (id)	
);

CREATE TABLE contact (
	id INT AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	link VARCHAR(255), 
	icon VARCHAR(255),
	is_social INT NOT NULL DEFAULT 0,
	PRIMARY KEY (id),
	UNIQUE (name)
);

CREATE TABLE setting (
	id INT AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
	value VARCHAR(45),
	PRIMARY KEY (id),
	UNIQUE (name)
);

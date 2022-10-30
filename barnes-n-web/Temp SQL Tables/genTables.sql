CREATE DATABASE IF NOT EXISTS DEV_DB;
USE DEV_DB;

DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS GeoLocation;
DROP TABLE IF EXISTS Listings;

CREATE TABLE Users (
	user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    hashedPassword VARCHAR(255) NOT NULL,
    photo_id BLOB
);

CREATE TABLE GeoLocation (
	location_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    position POINT NOT NULL SRID 4326,
    SPATIAL INDEX(position)
);

CREATE TABLE Listings (
	listing_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    owner_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    location_id INT NOT NULL,
    isbn_10 VARCHAR(13), 
    isbn_13 VARCHAR(17),
    image BLOB, 
    author VARCHAR(255),
    max_due_date DATE,
    is_rented BOOLEAN NOT NULL,
    FOREIGN KEY (location_id) REFERENCES GeoLocation(location_id),
    FOREIGN KEY (owner_id) REFERENCES Users(user_id)
);


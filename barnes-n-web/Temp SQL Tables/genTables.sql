DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
	user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255),
    email VARCHAR(255),
    hashedPassword VARCHAR(255),
    PRIMARY KEY (user_id)
);
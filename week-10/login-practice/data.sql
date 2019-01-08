CREATE TABLE users (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR (60) NOT NULL,
   sex ENUM ('male', 'female'),
   country VARCHAR (60) NOT NULL
);

DESCRIBE users;

INSERT INTO users (name, sex, country) 
VALUES ('Anna', 'female', 'HU'), ('Zoli', 'male', 'HU'), ('Bela', 'male', 'HU'), ('Mate', 'male', 'HU'), ('Dave', 'male', 'UK');

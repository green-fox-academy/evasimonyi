CREATE TABLE users (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR (60) NOT NULL,
   password VARCHAR (20) NOT NULL,
   sex ENUM ('male', 'female'),
   country VARCHAR (60) NOT NULL
);

DESCRIBE users;

INSERT INTO users (name, password, sex, country) 
VALUES ('Anna', 'nem', 'female', 'HU'), 
('Zoli', 'vagyok', 'male', 'HU'), 
('Bela', 'tul', 'male', 'HU'), 
('Mate', 'kreativ', 'male', 'HU'), 
('Dave', 'ebben', 'male', 'UK');

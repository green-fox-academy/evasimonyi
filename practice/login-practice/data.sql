-- CREATE TABLE users (
--    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--    name VARCHAR (60) NOT NULL,
--    password VARCHAR (20) NOT NULL,
--    sex ENUM ('male', 'female'),
--    country VARCHAR (60) NOT NULL
-- );

-- DESCRIBE users;

-- INSERT INTO users (name, password, sex, country) 
-- VALUES ('Anna', 'nem', 'female', 'HU'), 
-- ('Zoli', 'vagyok', 'male', 'HU'), 
-- ('Bela', 'tul', 'male', 'HU'), 
-- ('Mate', 'kreativ', 'male', 'HU'), 
-- ('Dave', 'ebben', 'male', 'UK');


CREATE TABLE playlist (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name`  VARCHAR (60),
  `system` ENUM ('0', '1')
);

CREATE TABLE tracks (
  `artist` VARCHAR (60),
  `title` VARCHAR (60),
  `playlist` INT,
  FOREIGN KEY(playlist) REFERENCES playlist(id)
);

INSERT INTO playlist (name, system) VALUES ('favs', '0');
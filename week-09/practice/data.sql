CREATE DATABASE dogdatabase;
USE dogdatabase;

CREATE TABLE doggos (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (60) NOT NULL,
    color VARCHAR (30) NOT NULL,
    sex ENUM ('male', 'female'),
    PRIMARY KEY (id)
);

INSERT INTO doggos (name, color, sex) VALUES ('Dorka', 'barna', 'female'), ('Morzsi kutyam', 'barna', 'male');

SELECT * FROM doggos;
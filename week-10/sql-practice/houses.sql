CREATE DATABASE housedatabase;
USE housedatabase;

CREATE TABLE houses
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR (60) NOT NULL,
    street VARCHAR (100) NOT NULL,
    housenumber INT NOT NULL,
    owner VARCHAR(40) NOT NULL
);

DESCRIBE houses;

INSERT INTO houses (city, street, housenumber, owner) 
VALUES ('Budapest', 'Bajcsi', '90', 'Anna'), 
('Budapest', 'Kossuth', '290', 'Balazs'),
('Praga', 'Fo', '890', 'Bara'),
('Parizs', 'ChampsElysee', '2929', 'Andrea')
;

SELECT * FROM houses;
create database todo;
use todo;

CREATE TABLE todo;
CREATE TABLE todolist (
  id INT NOT NULL AUTO_INCREMENT, 
  Task TEXT NOT NULL, Status TEXT NOT NULL 
  ENUM ('done', 'not done'), 
  PRIMARY KEY (id)
  );

INSERT INTO todo (Task, Status) VALUES ('ajandekvasarlas', 'not done'), ('ajandekcsomagolas', 'done'), ('foto', 'done');

SELECT * FROM todo;


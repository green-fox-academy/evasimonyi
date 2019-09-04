CREATE DATABASE reddit;
USE reddit;

-- CREATE TABLE posts;
CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT, 
  title TEXT NOT NULL, 
  url TEXT NOT NULL, 
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
  score INT DEFAULT 0,
  owner TEXT DEFAULT null,
  vote INT DEFAULT 0,
  PRIMARY KEY (id)
  );

INSERT INTO posts (title, url) VALUES ('test1', 'http://www.facebook.com'), ('test2', 'http://www.facebook.com');

-- SELECT * FROM posts;

-- DROP TABLE posts;
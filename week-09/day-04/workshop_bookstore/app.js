const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use('/static', express.static('static'));
app.use(express.json());

const conn = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'bookinfo',
  port: 3306,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const getAllBooks = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ((book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id) INNER JOIN category ON book_mast.cate_id = category.cate_id) INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id';

app.get('/books', (req, res) => {

  const { book_name, aut_name, cate_descrip, pub_name, book_price } = req.query;

  if (book_name) {
    conn.query(`${getAllBooks} WHERE book_name LIKE '%${book_name}%';`, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  } else if (aut_name) {
    conn.query(`${getAllBooks} WHERE aut_name LIKE '%${aut_name}%';`, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  } else if (cate_descrip) {
    conn.query(`${getAllBooks} WHERE cate_descrip LIKE '%${cate_descrip}%';`, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  } else if (pub_name) {
    conn.query(`${getAllBooks} WHERE pub_name LIKE '%${pub_name}%';`, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  } else if (book_price) {
    conn.query(`${getAllBooks} WHERE book_price LIKE '%${book_price}%';`, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  } else {
    conn.query(getAllBooks, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).send();
      }
      else {
        res.json(data);
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
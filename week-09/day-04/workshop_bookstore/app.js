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

app.get('/author', (req, res) => {
  const sql = 'SELECT * FROM author;';
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

app.get('/books', (req, res) => {
  const bookNames = 'SELECT book_name FROM book_mast;';
  conn.query(bookNames, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

// List the following data:
// book title
// authors name
// category
// publishers name
// price
// Return HTML that contains the list as a <table>

app.get('/bookinfo', (req, res) => {
  const getAllBooks = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ((book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id) INNER JOIN category ON book_mast.cate_id = category.cate_id) INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;';

  conn.query(bookNames, authorsNames, category, publisherNames, price, 
    (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

// conn.end(err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('\n', 'Disconnected from database');
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
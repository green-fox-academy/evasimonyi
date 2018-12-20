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

// con.end(err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('\n', 'Disconnected from database');
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
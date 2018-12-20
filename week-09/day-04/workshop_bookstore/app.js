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
  const sql = 'SELECT  * FROM author;';
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






// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });

// const bookNames = 'SELECT book_name FROM book_mast';

// con.query(bookNames, function(err, rows) {
//   if (err) {
//     console.log(err.message);
//     // res.status(500).send();
//   } else {
//     console.log('Data received from Db:\n');
//     console.log(rows);
//   }
// });


// app.get('/author', (req, res) => {
//   con.query('SELECT * FROM author', (err, data) => {
//     if (err) {
//       console.log(err.message);
//       res.status(500).json();
//     } else {
//       console.log('Data received from Db:\n');
//       console.log(data);
//     }
//     res.json(data)
//   });
// });


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
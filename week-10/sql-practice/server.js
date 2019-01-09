'use strict';
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const mySQLConnection = mysql.createConnection({
  // multipleStatements: true,
  user: 'root',
  password: 'password',
  port: 3306,
  database: 'housedatabase'
});

app.get('/all', (req, res) => {
  mySQLConnection.query('SELECT * FROM houses;', (err, data) => {
    console.log(data);
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

app.put('/api/all', (req, res) => {
  const { city, street, housenumber, owner, id } = req.body;
  if ((city !== undefined || city !== '') && (street !== undefined || street !== '') && (housenumber !== undefined || housenumber !== '') && (owner !== undefined || owner !== '') && (id !== undefined || id !== '')) {
    mySQLConnection.query(`UPDATE houses SET city = '${city}', street = '${street}', housenumber = ${housenumber}, owner = '${owner}' WHERE id = ${id};`,
      (err, data) => {
        if (data.changedRows !== 1) {
          mySQLConnection.query(`INSERT INTO houses (id, city,  street, housenumber, owner) VALUES (?, ?, ?, ?, ?);`, [id, city, street, housenumber, owner], (err, data) => {
            if (err) {
              res.json({
                error: err
              })
              return;
            }
          })
          res.json({
            message: req.body
          })
          return;
        }
      })
    res.json({ message: 'put changed' })
  }
  else {
    res.json({nelegyel : 'buta'})
  }
})

app.patch('/api/all', (req, res) => {

  if (req.body.city) {
    mySQLConnection.query(`UPDATE houses SET city = '${req.body.city}' WHERE id = ${req.body.id};`, (err, data) => {
      if (err) {
        res.json({ error: err })
      }
    })
  }
  if (req.body.street) {
    mySQLConnection.query(`UPDATE houses SET street = '${req.body.street}' WHERE id = ${req.body.id};`, (err, data) => {
      if (err) {
        res.json({ error: err })
      }
    })
  }
  if (req.body.housenumber) {
    mySQLConnection.query(`UPDATE houses SET housenumber = ${req.body.housenumber} WHERE id = ${req.body.id};`, (err, data) => {
      if (err) {
        res.json({ error: err })
      }
    })
  }
  if (req.body.owner) {
    mySQLConnection.query(`UPDATE houses SET owner = '${req.body.owner}' WHERE id = ${req.body.id};`, (err, data) => {
      if (err) {
        res.json({ error: err })
      }
    })
  }
  res.json({ message: 'patch modified' })
})



app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});



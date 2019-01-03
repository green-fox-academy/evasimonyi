'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mySQL = require('mysql');

const mySQLConnection = mySQL.createConnection({
  multipleStatements: true,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 3306,
  database: process.env.DATABASE_NAME
});

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ENDPOINT WITH SQL QUERY
const getAllDoggos = 'SELECT * FROM doggos';
app.get('/doggos', (request, response) => {
  mySQLConnection.query(getAllDoggos, (err, data) => {
    if (err) {
      response.status(500).send(err);
    };
    response.status(200).send(data);
  });
});

// a formmal hozzaadhatunk uj sort az adatbazis tablazatba, postmanen megnezni, mukodik, utana megirni a frontendet
app.post('/doggos', (req, res) => {
  const { name, color, sex } = req.body;
  if (
    name === undefined || name === '' ||
    color === undefined || color === '' ||
    sex === undefined || sex === '') {
    res.json({
      message: 'All fields are required'
    });
  } else {
    mySQLConnection.query('INSERT INTO doggos (name, color, sex) VALUES (?, ?, ?);',
      [req.body.name, req.body.color, req.body.sex],
      (err, data) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'Internal server error'
          });
          return;
        }
        res.json({
          message: 'Succefully added'
        });
      });
  }
});

//torleshez a backend, postmanben csekkolni, utana frontend
app.delete('/doggos', (req, res) => {
  const { id } = req.body;
  mySQLConnection.query(`DELETE FROM doggos WHERE id = ${id};`, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json({
      message: 'succesfully deleted'
    });
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
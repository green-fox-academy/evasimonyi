'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const PORT = 3000;
const app = express();

app.use(express.static('static'));
app.use(express.json());

const mySQLConnection = mysql.createConnection({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
});

app.get('/posts', (req, res) => {
  mySQLConnection.query('SELECT * FROM posts;', (err, data) => {
    if (err === null) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ posts: data });
    }
    else {
      console.log(err);
      res.sendStatus(500);
    }
  });
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));

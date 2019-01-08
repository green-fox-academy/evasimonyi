'use strict';
// require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use('/assets', express.static('assets'));
app.use(express.json());
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });

app.get('/hello', (req, res) => {
  res.status(200).send('hello world');
})

app.get('/posts', (req, res) => {
  res.status(200).send('hello world');
})

app.listen(PORT, () => { console.log(`App is listening on port: ${PORT}`); });

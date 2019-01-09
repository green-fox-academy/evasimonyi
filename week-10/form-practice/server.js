'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;


app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });

app.post('/', (req, res) => {
  const { checkedArr } = req.body;
  console.log(checkedArr)
  res.json({
    message: checkedArr,
  });
});

app.post('/favanimal', (req, res) => {
  // const { pickedAnswer} = req.body;
  if (req.body.pickedAnswer) {
    res.json({
      message: req.body.pickedAnswer,
    });
  }
});

app.post('/dropdown', (req, res) => {
  if (req.body.pickedAnimal) {
    res.json({
      message: req.body.pickedAnimal,
    });
  }
});

app.put('/bla', (req, res) => {
  conn.query(`UPDATE table SET frontgarden = ${req.body.frontgarden}, backgarden =${req.body.backgarden}, garage WHERE id = 2`, (err, data) => {
    if (err) {
      res.json({
        error: err
      })
    }
  }
  )
  res.json({ asd: 'dfgh' })
})

app.listen(PORT, () => { console.log(`App is listening on port: ${PORT}`); });

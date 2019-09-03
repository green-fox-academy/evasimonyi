'use strict';

const PORT = 3000;
const express = require('express');
const app = express();

app.use(express.json());

// cargostatust kimenteni, es a bejovo parameterekkel updatelni

app.get('/rocket', (req, res) => {
  res.status(200).json({
    "caliber25": 0,
    "caliber30": 0,
    "caliber50": 0,
    "shipstatus": "empty",
    "ready": false
  })
});

// TODO: fix the logic, add new amount to the existing one
app.get('/rocket/fill', (req, res) => {
  const { caliber, amount } = req.query;
  let maxAmount = 12500;
  let shipstatus = `${(amount / maxAmount) * 100}%`;
  let ready = false;
  if (shipstatus == '100%') {
    ready = true;
  }
  res.status(200).json({
    received: caliber,
    amount,
    shipstatus,
    ready
  })
});

module.exports = app;

app.listen(PORT, () => {
  console.log('App is listening on PORT', PORT);
});

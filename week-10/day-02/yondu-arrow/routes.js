'use strict';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/yondu', (req, res) => {
  const { distance, time } = req.query;
  let speed = Number.parseFloat(distance / time).toFixed(1);
  if (!distance || !time || time == 0) {
    res.status(404).json({
      error: "please provide a valid distance and time which is not 0"
    });
  } else {
    res.status(200).json({
      distance,
      time,
      speed
    })
  }
});

module.exports = app;

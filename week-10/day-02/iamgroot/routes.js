const express = require('express');
const app = express();

app.use(express.json());

app.get('/groot', (req, res) => {
  const { message } = req.query;
  if (!message) {
    res.status(404).json({'err':'haho'});
  } else {
    res.status(200).json({
      "received": message,
      "translated": "I am Groot!"
    })
  }
});

module.exports = app;
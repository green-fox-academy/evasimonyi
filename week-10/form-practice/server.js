'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });

// app.post('/', (req, res) => {
//   const { checkedArr } = req.body;
//   res.json({
//     message: checkedArr,
//   });
// });

// app.post('/favanimal', (req, res) => {
//   if (req.body.pickedAnswer) {
//     res.json({
//       message: req.body.pickedAnswer,
//     });
//   }
// });

// app.post('/dropdown', (req, res) => {
//   if (req.body.pickedAnimal) {
//     res.json({
//       message: req.body.pickedAnimal,
//     });
//   }
// });

app.post('/final', (req, res) => {
  if (req.body.pickedAnswer && req.body.checkedArr && req.body.pickedAnimal) {
    res.json({
      message: req.body,
    });
  } else if (req.body.pickedAnswer === undefined || req.body.checkedArr === undefined || req.body.pickedAnimal === undefined ||
    req.body.pickedAnswer === '' || req.body.checkedArr === '' || req.body.pickedAnimal === '') {
    res.json({
      message: 'all fields are required'
    });
  }
});

app.listen(PORT, () => { console.log(`App is listening on port: ${PORT}`); });

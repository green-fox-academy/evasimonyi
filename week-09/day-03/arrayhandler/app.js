const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());

const sum = (numbers) => {
  let sum = 0;
  numbers.forEach(e => {
    sum += e;
  });
  return sum;
}

const multiply = (numbers) => {
  let multiplyBy = 1;
  numbers.forEach(e => {
    multiplyBy *= e;
  });
  return multiplyBy;
}

const numberDouble = (numbers) => {
  let numberDouble = [];
  numbers.forEach(e => {
    numberDouble.push(e * 2);
  });
  return numberDouble;
}

app.post('/arrays', (req, res) => {
  let what = req.body.what;
  let numbers = req.body.numbers;
  if (what && numbers) {
    if (what === 'sum') {
      res.json({
        "result": sum(numbers)
      });
    } else if (what === 'double') {
      res.json({
        "result": numberDouble(numbers)
      });
    } else if (what === 'multiply') {
      res.json({
        "result": multiply(numbers)
      });
    } else if (!what && !numbers) {
      res.json({ "error": "Please provide what to do with the numbers!" })
    }
  } else {
    res.json({
      "error": "Please provide what to do with the numbers!"
    })
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/arrays', (req, res) => {
  let what = req.body.what;
  let numbers = req.body.numbers;
  if (what && numbers) {
    if (what === 'sum') {
      res.json({
        "result": numbers.reduce((a, b) => a - b)
      });
    } else if (what === 'double') {
      res.json({
        "result": numbers.map(x => x * 2)
      });
    } else if (what === 'multiply') {
      res.json({
        "result": numbers.reduce((a, b) => a * b)
      });
    } else if (!what && !numbers) {
      res.json({ error: "Please provide what to do with the numbers!" })
    }
  } else {
    res.json({
      error: "Please provide what to do with the numbers!"
    })
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.send({
      "received": req.query.input,
      "result": req.query.input * 2
    })
  } else {
    res.send({ "error": "Please provide an input!" });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.send({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  } else if (req.query.name !== true) {
    res.send({ "error": "Please provide a name!" });
  } else if (req.query.title !== true) {
    res.send({ "error": "Please provide a title!" });
  }
});

app.get('/appenda/:appendable?', (req, res) => {
  if (req.params.appendable) {
    res.json({
      "appended": `${req.params.appendable}a`
    });
  } else if (req.params.appendable !== true) {
    res.status(404).send();
  }
});

const factorialize = (num) => {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
}

const sum = (num) => {
  let summary = 0;
  for (let i = 1; i <= num; i++) {
    summary += i;
  }
  return summary;
}

app.post('/dountil/:action', (req, res) => {
  let until = req.body.until;
  if (req.params.action === 'factor') {
    res.send({
      "result": factorialize(until)
    });
  } else if (req.params.action === 'sum') {
    res.send({
      "result": sum(until)
    });
  } else {
    res.send({ "error": "Please provide a number!" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
'use strict';
 
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const PORT = 3000;  

app.use(express.json());  

const shuffle = (string) => {
  var a = string.split(" "),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join(" ");
}

const firstLetterToUppercase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.post('/sith', (req, res) => {
  let text = req.body.text;
  let newText = text.split('.').join("");
  let mixedText = shuffle(newText).toLowerCase();
  let result = firstLetterToUppercase(mixedText);
  if (text) {
    res.json({
      "sith_text": `${result}. Arrgh. Uhmm. For just fun. Err..err.err.`
    })
  } else {
    res.json({
      "error": "Feed me some text you have to, padawan young you are. Hmmm."
    })
  }
});

app.listen(PORT, () => {   
  console.log(`App is listening on port: ${PORT}`); 
});

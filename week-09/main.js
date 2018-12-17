let express = require('express');
let app = express();



app.set('view engine', 'ejs');
app.use('/practice', express.static('practice'));


app.get('/', function (req, res) {
  res.json({ Hello: 'World' });
});

app.get('/view', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Application is listening on port 3000'));
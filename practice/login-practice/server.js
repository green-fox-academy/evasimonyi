'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

const mySQLConnection = mysql.createConnection({
  multipleStatements: true,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 3306,
  database: process.env.DB_DATABASE
});


app.use('/assets', express.static('assets'));
app.use(express.json());

app.use('/details/assets', express.static('assets'));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/details/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'details.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});

app.post('/login', (req, res) => {
  //ezeket adom meg a formban, es kuldom el a bodyban ide:
  const { name, password } = req.body;
  if (name && password) {
      //ha mindkettot megadom, akkor adjon vissza mindent a tablazatbol:
    mySQLConnection.query('SELECT * FROM users;', (err, data) => {
      if (err) {
        //ez akkor jon, ha nem tud kapcsolodni az SQL-hez
        res.status(500).send();
        return;
      }
      //ha tud csatlakozni az SQL-hez, akkor keresse meg a tablazatban, hogy hol van egyezes a formbol elkuldott name es az adatbazisban a name kozott
      const nameFromDatabase = data.find(res => res.name === name);
      //hogyha van egyezes, tehat van ilyen user:
      if (nameFromDatabase) {
        //akkor nezze meg hogy a beirt jelszo megegyezik e a databazisban a userhez eltarolt jelszoval
        if (nameFromDatabase.password === password) {
          console.log(nameFromDatabase)
          //ha igen, kuldje vissza az ID-jat, es iranyitson at a details oldalra
          res.json({
            message: 'Succesful',
            pathTo: '/details',
            id: nameFromDatabase.id
          });
          //ha nem, akkor a jelszo rossz:
        } else {
          res.json({
            message: 'Wrong password'
          });
        }
      } 
      //ha nincs olyan nev a datbaseben, mint amit beirtunk a formban:
      else {
        res.json({
          message: 'NO such user',
          pathTo: '/register'
        });
      }
    });
  }
});

//ha kitoltottuk a login formot, akkor kikeresi a hozza tartozo id-t es atiranyit arra az oldalra ahol az o adatai vannak
app.get('/api/details/:id', (req, res) => {
  const { id } = req.params;
  mySQLConnection.query(`SELECT * FROM users WHERE id = '${id}';`, (err, data) => {
    if (err) {
      res.status(500).send();
      console.log(err)
      return;
    }
    console.log(data);
    res.json(data);
  });
});


//ha nincs ilyen nevu user mint amit megadtunk a login formban, akkor atiranyit a register oldalra, ahol megadjuk az adatainkat
//amiket itt elmentunk az adatbazisba
app.post('/registry', (req, res) => {
  const { name, password, country } = req.body;
  mySQLConnection.query('INSERT INTO users (name, password, country) VALUES (?, ?, ?);', [name, password, country], (err, data) => {
    if(err) {
      res.status(500).send();
      console.log(err);
      return;
    }
    res.json({
      message: 'New user added'
    });
  });
});




app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
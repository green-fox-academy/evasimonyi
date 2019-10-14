'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/manage', (req, res) => {
  res.sendFile(path.join(__dirname, 'manage.html'));
});

const mySQLConnection = mysql.createConnection({
  multipleStatements: true,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 3306,
  database: process.env.DB_DATABASE
});

app.get('/allquestions', (req, res) => {
  mySQLConnection.query('SELECT * FROM questions INNER JOIN answers ON questions.id = answers.question_id;', (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

app.delete('/playlist/:id', (req, res) => {
  connection.query('DELETE from playlist where id=?', [req.params.id], (err, rows) => {
    if (err) {
      console.log('Cannot log in user: ', err);
      res.sendStatus(500);
      return;
    }
    res.json(rows);
  });
})




// const showRandomQuestion = 'select * from questions order by rand() limit 1;';

// app.get('/showquestion', (req, res) => {
//   let randomnumber = Math.floor(Math.random() * 10) + 1;
//   mySQLConnection.query(`SELECT question FROM questions WHERE id = ${randomnumber};`, (err, data) => {
//     if (err) {
//       console.log(err.message);
//       res.status(500).json({
//         error: 'Internal server error 1'
//       });
//       return;
//     } else {
//       mySQLConnection.query(`SELECT * FROM questions INNER JOIN answers ON questions.id = answers.question_id WHERE questions.id = ${randomnumber} AND answers.question_id = ${randomnumber};`, (err, data2) => {
//         if (err) {
//           console.log(err.message);
//           res.status(500).json({
//             error: 'Internal server error 2'
//           });
//           return;
//         }
//         console.log(data2);
//         res.json(data2);
//       });
//     };
//   });
// })

const selectRandomQuestion = 'select * from questions order by rand() limit 1;';

app.get('/api/game', (req, res) => {
  mySQLConnection.query(selectRandomQuestion, (err, rows) => {
    if (err) {
      console.log('Cannot log in user: ', err);
      res.sendStatus(500);
      return;
    }

    if (rows.length === 0) {
      res.render('login', { error: 'Incorrect uname or password' });
      return;
    }

    res.cookie('logged_in', true);
    res.redirect('/articles');
  });
});

// const selectAnswerOptions = 'select * from answers where question_id=?;';

const getAnswerOptions = (req, res, data) => {
  mySQLConnection.query('select * from answers where question_id=?;', data[0].id, (err, answersData) => {
    if (err) {
      console.log(err.message);
      res.status(500).send();
    } else {
      const questionObj = {
        'id': data[0].id,
        'question': data[0].question,
        'answers': answersData
      }
      res.json(questionObj)
    }
  });
}

app.get('/manageall', (req, res) => {
  mySQLConnection.query('SELECT * FROM questions;', (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

app.delete('/deletequestion', (req, res) => {
  const { qid } = req.body;
  const sql = 'SELECT * FROM author;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    if (rows.find(data => data.qid === question_id)) {
      conn.query(`DELETE FROM questions WHERE aut_id = '${question_id}';`, (err, data) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'Internal server error'
          });
          return;
        }
        res.json({
          message: 'Succesfully deleted'
        });
      });
    } else {
      res.json({
        message: 'Wrong ID'
      });
    }
  });

});

app.listen(PORT, () => { console.log(`App is listening on port: ${PORT}`); });

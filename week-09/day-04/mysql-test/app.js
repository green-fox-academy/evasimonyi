'use strict';

// app.js
const mysql = require('mysql');

// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'practice'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

const findAllEmployees = 'SELECT * FROM employees';

con.query(findAllEmployees, function(err, rows) {
  if (err) {
    console.log(err.toString());
  }

  rows.forEach( (row) => {
    console.log(`${row.name} is in ${row.location}`);
  });
  
  console.log('Data received from Db:\n');
  console.log(rows);
});

const employee = { name: 'Winnie', location: 'Australia' };
con.query('INSERT INTO employees SET ?', employee, (err, res) => {
  if(err) throw err;
  console.log('Last insert ID:', res.insertId);
}); 

con.query(findAllEmployees);

con.end(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('\n', 'Disconnected from database');
});
'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('TESTING GET /groot ENDPOINT WITHOUT QUERY', (t) => {
  request(app)
    .get('/groot')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { "error": "I am Groot!" }, 'nem volt query, jol lefutott');
      t.end();
    });
});

test('TESTING GET /groot ENDPOINT WITH QUERY', (t) => {
  request(app)
    .get('/groot?message=szioka')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      console.log(res.body);
      t.same(res.body, {"received": "szioka", "translated": "I am Groot!"}, 'szipiszupi');
      t.end();
    });
});
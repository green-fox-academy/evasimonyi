'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('TESTING GET /yondu ENDPOINT WITH QUERY', (t) => {
  request(app)
    .get('/yondu?distance=100&time=20')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        "distance": "100",
        "time": "20",
        "speed": "5.0"
      }, 'szipiszupi');
      t.end();
    });
});

test('TESTING GET /yondu ENDPOINT WITHOUT QUERY', (t) => {
  request(app)
    .get('/yondu?distance=100&time=0')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        "error": "please provide a valid distance and time which is not 0"
      }, 'sadpanda');
      t.end();
    });
});

test('TESTING GET /yondu ENDPOINT WITHOUT QUERY', (t) => {
  request(app)
    .get('/yondu?distance=100')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        "error": "please provide a valid distance and time which is not 0"
      }, 'sadpanda, no time param');
      t.end();
    });
});

test('TESTING GET /yondu ENDPOINT WITHOUT QUERY', (t) => {
  request(app)
    .get('/yondu?time=0')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        "error": "please provide a valid distance and time which is not 0"
      }, 'sadpanda, no distance');
      t.end();
    });
});

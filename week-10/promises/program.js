'use strict';
require('es6-promise');
var os = require('os');
os.tmpDir = os.tmpdir;

// 1
// setTimeout(() => {
//   console.log('TIMED OUT!')
// }, 300);

// 2
// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => {
//     fulfill('FULFILLED!')
//   }, 300)
// });

// promise.then(res => console.log(res));

// 3
// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => {
//     reject(new Error('REJECTED!'))
//   }, 300)
// });

// function onReject(error) {
//   console.log(error.message);
// }

// promise
//   .then(response => console.log(response.json()), err => onReject(err))
// // official megoldas: promise.then(null, onReject);

// 4 
// var promise = new Promise(function (fulfill, reject) {
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// });

// function onRejected(error) {
//   console.log(error.message);
// }

// promise
//   .then(response => console.log(response), err => onRejected(err))
//   // official megoldas: promise.then(console.log, onReject);
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
// official megoldas: promise.then(console.log, onReject);

// 5
// var promise = new Promise((fulfill, reject) => {
//   fulfill('PROMISE VALUE');
// });

// promise
//   .then(result => console.log(result))

// console.log('MAIN PROGRAM')

// 6
// var promise = Promise.resolve('cica')
// var promise2 = Promise.reject('kiscica')

// promise
//   .then(result => console.log(result))

// promise2
//   .catch(err => console.log(err))

// 7
// first()
//   .then(second)
//   .then(console.log)

// 8
// function attachTitle(name) {
//   return `DR. ${name}`;
// }

// Promise.resolve('MANHATTAN')
//   .then(attachTitle)
//   .then(console.log)

// 9 

// function parsedPromised(json) {
//   return new Promise(function (resolve, reject) {
//     try {
//       resolve(JSON.parse(json))
//     }
//     catch (error) {
//       reject(error.message)
//     }
//   })
// }

// parsedPromised(process.argv[2])
//   .then(console.log)
//   .catch(console.log)

// 10
// function alwaysThrows() {
//   throw new Error('OH NOES')
// }

// function iterate(argument) {
//   console.log(argument);
//   return argument + 1;
// }

// function onReject(e) {
//   console.log(e.message);
// }

// Promise.resolve(iterate(1))
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(alwaysThrows)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .catch(onReject);

// 11

// function all(promise1, promise2) {
//   let myPromise = new Promise((resolve, reject) => {
//     let counter = 0;
//     let values = [];

//     function add(num) {
//       counter += 1;
//       values.push(num);
//       if (counter === 2) {
//         resolve(values)
//       }
//     }
//     Promise.resolve(promise1).then(add);
//     Promise.resolve(promise2).then(add);
//   })
//   return myPromise;
// }

// all(getPromise1(), getPromise2())
//   .then(console.log);

// 12 


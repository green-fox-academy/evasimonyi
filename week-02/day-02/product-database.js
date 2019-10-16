'use strict';

let products = new Map();

products.set('Eggs', 200);
products.set('Milk', 200);
products.set('Fish', 400);
products.set('Apples', 150);
products.set('Bread', 50);
products.set('Chicken', 550);

// How much is the fish?
console.log(products.get('Fish'));

// What is the most expensive product?
let maxKey;
let maxVal = 0;

products.forEach((value, key) => {
  if (value > maxVal) {
    maxVal = value;
    maxKey = key;
  }
});

console.log(maxKey);
let avg = 0;

products.forEach(value => avg += value);
avg /= products.size;

console.log(avg);

//   - How many products' price is below 300?
let count = 0

products.forEach(value => {
  if (value < 300) {
    count++;
  }
});

console.log(count);
//   - Is there anything we can buy for exactly 125?

let exactPrice = [];

products.forEach((value, key) => {
  if (value == 125) {
    exactPrice.push(key);
  }
});
console.log(exactPrice);

//   - What is the cheapest product?

let minKey = '';
let minVal = Infinity;

products.forEach((value, key) => {
  if (value < minVal) {
    minVal = value;
    minKey = key;
  }
});

console.log(minKey);

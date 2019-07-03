'use strict';
export { };

let myMap = new Map([['978-1-60309-452-8', 'A Letter to Jo'], ['978-1-60309-459-7', 'Lupus'], ['978-1-60309-444-3', 'Red Panda and Moon Bear'], ['978-1-60309-461-0', 'The Lab']]);
// console.log(myMap);

// myMap.forEach(function (elementPair) {
//   console.log(elementPair);
// })

function logMapElements(value: string, key: string) {
  console.log(`${value} (ISBN: ${key})`);
}

myMap.forEach(logMapElements);
myMap.delete('978-1-60309-444-3');
console.log(myMap.get('The Lab'));

// function getKey(value) {
//   return [...people].find(([key, val]) => val == value)[0]
// }
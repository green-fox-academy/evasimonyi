'use strict';
export { };

let myMap = new Map;
myMap.set('97', 'a');
myMap.set('98', 'b');
myMap.set('99', 'c');
myMap.set('65', 'A');
myMap.set('66', 'B');
myMap.set('67', 'C');
console.log(myMap.keys());
console.log(myMap.values());
myMap.set('68', 'D');
console.log(myMap.size);
console.log(myMap.get('99'));
console.log(myMap.delete('97'));
console.log(myMap.has('100'));
console.log(myMap.clear());

'use strict';
export { };

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB = listA;


listA.forEach(function (item) {
  if (item === 'Durian') {
    console.log('I contain Durian');
  }
});

let index = listB.indexOf('Durian');

if (index > -1) {
  listB.splice(index, 1);
}

listA.push('Kiwifruit');

console.log(listA.length === listB.length);
console.log(listA.indexOf('Avocado'));
console.log(listB.indexOf('Durian'));

//solution1
listA.push.apply(listA, ['Passion Fruit', 'Pomelo'])
console.log(listA);

//solution2
console.log(...listA, 'Passion Fruit', 'Pomelo');


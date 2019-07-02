'use strict';
export { };

let names: string[] = [];

let name1 = 'William';
let name2 = 'Anna';
let name3 = 'Mark';

names.push(name1);
names.push(name2);
names.push(name3);

console.log(names);
console.log(names.length);
console.log(names[2]);
names.forEach(function (name) {
  console.log(name);
});

for (let i: number = 0; i < names.length; i++) {
  console.log((i + 1) + '. ' + names[i]);
};

names.splice(1, 1);
console.log(names);


// elso megoldas
let reversed = names.reverse();
console.log(reversed);

// masodik megoldas
for (let i = 0; i < reversed.length; i++) {
  console.log(reversed[i]);
}
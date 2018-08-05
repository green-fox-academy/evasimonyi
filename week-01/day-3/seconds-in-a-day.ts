'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

console.log(24 * 60 * 60 - ((14 * 60 * 60)+(34 * 60)+42));
console.log(24 * 60 * 60 - ((currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds));

// seconds in a day = 86400, letelt: 50400 + 2040 + 42, sum 52482
// 86400 - 52482 = 33918
// it worked!!!!!! :)


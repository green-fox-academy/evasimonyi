'use strict';

export {};

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let number: number = 5;
function sum (number) {
    let summ = 0;
    for (let i = 0; i < number; i++){
        summ = summ + i;      
        };
        return summ;   
    }
console.log(sum (number));

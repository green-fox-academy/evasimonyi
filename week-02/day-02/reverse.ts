'use strict';
export { };

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let stringToReverse = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverseString1(string: string) {
    return string.split("").reverse().join("");
};

console.log(reverseString1(stringToReverse));

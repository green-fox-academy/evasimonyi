'use strict';
export { };

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let potlas: string = 'always takes longer than ';
let indexOfYou = quote.indexOf('you');

let output = [quote.slice(0, indexOfYou), potlas, quote.slice(indexOfYou)].join('');
console.log(output);

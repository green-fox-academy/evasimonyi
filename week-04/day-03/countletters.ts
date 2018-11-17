//Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
//Create a test for that.

'use strict';
export {};

const test = require('tape');

let dictionary = {};

function occurence(str: string) {
	for (let i = 0; i < str.length; i++) {
    let letter = str[i];
		dictionary[letter] = (dictionary[letter] || 0) + 1;
	}
	return dictionary;
}

console.log(occurence("Hello world"));

test('count letter occurence of string', (t) => {
    t.plan(1);
    t.deepEqual(occurence('Hello World'), { H: 2, e: 2, l: 6, o: 4, ' ': 2, w: 1, r: 2, d: 2, W: 1 });
}); 
/* Create a sum method in your class which has a list of integers as parameter
It should return the sum of the elements in the list
Follow these steps:
Add a new test case
Instantiate your class
create a list of integers
use the t.equal to test the result of the created sum method
Run it
Create different tests where you
test your method with an empyt list
with a list with one element in it
with multiple elements in it
with a null
with a string
Run them
Fix your code if needed */

'use strict';
export {};

var test = require('tape');

class Sum {
	getSum(listOfNums) {
		let sumOfNums = listOfNums.reduce((a, b) => a + b, 0);
		return sumOfNums;
	}
}

let newSum = new Sum ();
let listOfNums = [1, 2, 3, 4];

console.log(newSum.getSum(listOfNums))

test('returns sum of numbers in array', function(t) {
    const actual = newSum.getSum(listOfNums);
    const expected = 10;
  
    t.equal(actual, expected);
    t.end();
}); 

let listOfNumsEmpty = [];
test('returns sum of numbers in array', function(t) {
	const actual = newSum.getSum(listOfNumsEmpty);
	const expected = 0;

	t.equal(actual, expected);
	t.end();
}); 

let listOfNumsOne = [4];
test('returns sum of numbers in array', function(t) {
	const actual = newSum.getSum(listOfNumsOne);
	const expected = 4;

	t.equal(actual, expected);
	t.end();
}); 

let listOfNumsNull = [null];
test('returns sum of numbers in array', function(t) {
	const actual = newSum.getSum(listOfNumsNull);
	const expected = 0;

	t.equal(actual, expected);
	t.end();
}); 

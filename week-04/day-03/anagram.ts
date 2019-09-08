// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

'use strict';
export { };

let test = require('tape');

function isThisAnAnagram(word1: string, word2: string): boolean {
	return word1.split('').sort().join('') === word2.split('').sort().join('');
}

test('returns true if anagram', function (t: any) {
	const actual = isThisAnAnagram('blaa', 'abal');
	const expected = true;

	t.ok(actual, expected);
	t.end();
}); 

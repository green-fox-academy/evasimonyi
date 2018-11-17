// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

'use strict';
export {};

var test = require('tape');

function isThisAnAnagram (word1: string, word2: string): boolean {
    for(let i = 0; i < word1.length; i++) {
        return word1.split('').sort().join('').charAt(i) === word2.split('').sort().join('').charAt(i)
    }
}

console.log(isThisAnAnagram('blaa', 'abal'));

test('returns true if anagram', function(t) {
    const actual = isThisAnAnagram('blaa', 'abal');
    const expected = true;
  
    t.ok(actual, expected);
    t.end();
}); 

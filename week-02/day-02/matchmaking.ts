'use strict';
export { };

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls: string[], boys: string[]) {
    let matched = [];
    for (let i: number = 0; i < girls.length; i++) {
        matched.push(girls[i]);
        matched.push(boys[i]);
    }
    return matched;
};

console.log(makingMatches(girls, boys));

export = makingMatches;

// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
'use strict';
export { };

let planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

function putSaturn(list: string[]): string[] {
  list.splice(5, 0, 'Saturn');
  return list;
};

// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

console.log(putSaturn(planetList));

export = putSaturn;
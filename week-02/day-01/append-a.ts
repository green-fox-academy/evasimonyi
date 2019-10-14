//  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

'use strict';
export { };

var animals: string[] = ["koal", "pand", "zebr"];

function appendA(arrayToBeCorrected: string[]): string[] {
	var animals2: string[] = [];
	for (let i: number = 0; i < arrayToBeCorrected.length; i++) {
		animals2.push(arrayToBeCorrected[i] + 'a');
	};
	return animals2;
}

console.log(appendA(animals));

appendA(animals);

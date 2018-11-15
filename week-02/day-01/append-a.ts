'use strict';
export {};

 //  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

var animals : string[] = ["koal", "pand", "zebr"];

function appendA (corrected: string[]): string[] {
    var animals2: string[] = [];
    for (let i : number = 0; i < corrected.length; i++) {
        animals2.push(corrected[i] + 'a');
    };
    return animals2;
}

console.log(appendA(animals));

// appendA(animals);

// functionon kívül legyen console.log, csinálni egy új arrayt, amibe a jó értékeket pakoljuk
// az appendA meghívás a végén adja vissza az új jó listát
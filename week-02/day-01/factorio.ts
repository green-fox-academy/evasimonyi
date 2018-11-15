// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict';
export {};

let num : number = 4;
function factorio (num){
    let y = 1;
    for (let i = 0; i < num; i++){
        y = y * (i + 1);
        }
    return y;
}
console.log(factorio (num));
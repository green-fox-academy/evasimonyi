// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size : number = 5;
let matrix : number [][] = [];

for (let i : number = 0; i < size; i++) {
    matrix [i] = [];
}

for (let i : number = 0; i < size; i++) {
    for  (let k : number = 0; k < size; k ++) {
        matrix [i][k] = 0;
        matrix [i][size -1 -i] = 1;
    }
}

console.log (matrix);
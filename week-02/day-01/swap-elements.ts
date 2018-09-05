// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

var abc = ["Arthur", "Boe", "Chloe"];

var tmp = abc[0];
abc[0] = abc[2];
abc[2] = tmp;

console.log(abc);
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';
export {};

function printParams (value1: number = 1, value2: number = 2, value3: number = 3){
    console.log(value1, value2, value3);
}

printParams();
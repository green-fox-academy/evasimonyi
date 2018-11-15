'use strict';
export {};

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide (withNumber: number) : any {
    if (withNumber === 0) {
        throw Error ("fail");
    } else {
        return (10/withNumber);
    }
};

divide(10)

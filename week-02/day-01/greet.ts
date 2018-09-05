'use strict';

export {};

// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

var name: string = 'GreenFox';

function greet (name){
    console.log('Greetings, dear ' + name)
}

greet(name);
greet("Évi");


//ua mint function greet (name) és a végén meghíváskor is greet(name)
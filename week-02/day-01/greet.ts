// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

'use strict';
export { };

function greet(name = 'Green Fox') {
  console.log(`Greetings, dear ${name}`);
}

greet();
greet('Évi');

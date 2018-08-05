'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;
// tomeg/magassag negyzete
let bmiIndex: number = massInKg / Math.pow(heightInM, 2);

console.log(bmiIndex);

// Print the Body mass index (BMI) based on these values
/*
Súlyosan sovány 16,00 alatt
Közepesen sovány 16,00 - 16,99
Enyhén sovány 17,00 - 18,49
Normál testsúly 18,50 - 24,99
Túlsúlyos >25,00*/

if (bmiIndex < 15.99) {
    console.log('Súlyosan sovány');
}   else if(bmiIndex > 16 && bmiIndex < 16.99) {
    console.log('Közepesen sovány');
}   else if(bmiIndex < 18.49 && bmiIndex > 17) {
    console.log('Enyhén sovány');
}   else if(bmiIndex < 24.99 && bmiIndex > 18.5) {
    console.log('Normál testsúly');
}   else if(bmiIndex > 25) {
    console.log('Túlsúlyos');
}
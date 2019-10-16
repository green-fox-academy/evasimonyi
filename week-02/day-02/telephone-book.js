'use strict';

let phoneBook = new Map();
phoneBook.set('William A. Lathan', '405-709-1865');
phoneBook.set('John K. Miller', '402-247-8568');
phoneBook.set('Hortensia E. Foster', '606-481-6467');
phoneBook.set('Amanda D. Newland', '319-243-5613');
phoneBook.set('Brooke P. Askew', '307-687-2982');

// What is John K. Miller's phone number?
console.log(phoneBook.get('John K. Miller'));

// Whose phone number is 307-687-2982?
phoneBook.forEach((value, key) => {
  if (value == "307-687-2982") {
    console.log(key);
  }
});

// Do we know Chris E. Myers' phone number?
console.log('Chris E. Myers' in phoneBook);
// or
console.log(phoneBook.has("Chris E. Myers"));

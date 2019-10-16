'use strict';

const watchlist = [];

let securityAlcholLoot = 0;

const queue = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function filterAlcohol(listOfpeople) {
  let peopleWhoHasAlcohol = listOfpeople.filter(festivalGoer => festivalGoer.alcohol > 0);
  peopleWhoHasAlcohol.forEach(person => {
    securityAlcholLoot += person.alcohol;
    person.alcohol = 0;
  });
}

function filterGuns(listOfpeople) {
  let peopleWhoHasGun = listOfpeople.filter(festivalGoer => festivalGoer.guns > 0);
  peopleWhoHasGun.forEach(person => {
    watchlist.push(person.name);
  });
}

function securityCheck(listOfpeople) {
  filterAlcohol(listOfpeople);
  filterGuns(listOfpeople);

  return queue.filter(person => !watchlist.includes(person.name));
}

console.log(securityCheck(queue));
console.log(watchlist);
console.log(securityAlcholLoot);

module.exports = securityCheck;

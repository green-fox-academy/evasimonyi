// 1: generate 100 divs to the < section > element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//   - the timer should fire every 100ms
//     - the timer should stop when there are no more elements left to be colored

const section = document.querySelector('section');

let isPrime = (n) => {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

for (let i = 1; i <= 100; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  section.appendChild(div);
  if (isPrime(i) === false) {
    div.classList.add('not-prime')
  } else if (isPrime(i)) {
    div.classList.add('prime')
  }
}

const divs = document.querySelectorAll('div');

let divIndex = 0;

let timer = setInterval(() => {
  if(divIndex < divs.length){
    isPrime(divs[divIndex]);
    divIndex++;
  } else {
    clearInterval(timer);
  }
}, 100);

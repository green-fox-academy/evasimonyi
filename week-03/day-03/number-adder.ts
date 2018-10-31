// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numadder (num: number): number {
    if (num < 1) { //base case
      return 1;
    }
    else {
        return  (num - 1);
    } 
  }

console.log(numadder(7))

/*
number = 7
1 + 2 + 3 + 4 + 5 + 6 
(7-1) + (7-2) + (7-3) stb

return number - i
*/
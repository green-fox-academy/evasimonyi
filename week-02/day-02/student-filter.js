'use strict';

const students = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function healthyStudents(students) {
  return students.filter(student => student.candies < 4);
}

console.log(healthyStudents(students));

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function getStudentsCandiesAvg(students) {
  let sumCandy = students.map(healtyhStudent => healtyhStudent.candies).reduce((a, b) => a + b, 0);
  let avgCandy = sumCandy / students.length;
  return avgCandy;
}

console.log(getStudentsCandiesAvg(students));

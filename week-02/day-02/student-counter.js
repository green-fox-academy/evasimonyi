'use strict';

const students = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 }
]

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether
let sumCandies = 0;
students.forEach(student => {
  sumCandies += student.candies;
});

console.log(sumCandies);

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies
function healthyStudents(students) {
  let healthyStudents = students.filter(student => student.candies < 5);
  let healthyStudentsAgeSum = healthyStudents.map(healtyhStudent => healtyhStudent.age).reduce((a, b) => a + b, 0)
  let healthyStudentsAgeAvg = healthyStudentsAgeSum / healthyStudents.length;
  return healthyStudentsAgeAvg;
}

console.log(healthyStudents(students));

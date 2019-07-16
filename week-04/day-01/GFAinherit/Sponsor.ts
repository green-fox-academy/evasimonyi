'use strict';

import { Person } from './Person';
export class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.')
  }
  introduce() {
    console.log(`Hi I\'m ${this.name}, a ${this.age} old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
  }
  hire() {
    this.hiredStudents++;
  }
}

let google: Sponsor = new Sponsor();
google.introduce();
google.hire();
google.hire();
google.hire();
google.hire();
google.hire();
google.hire();
google.introduce();
console.log(google.hiredStudents);
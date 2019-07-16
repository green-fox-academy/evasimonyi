'use strict';

import { Person } from './Person';

export class Mentor extends Person {
  level: string;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.')
  }
  introduce() {
    console.log(`Hi I\'m ${this.name}, a ${this.age} old ${this.gender} ${this.level} mentor.`)
  }
}

export default Mentor;
'use strict';

import { Student } from './Student';
import { Mentor } from './Mentor';

export class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(newStudent: Student) {
    this.students.push(newStudent);
    return this.students;
  }

  addMentor(newMentor: Mentor) {
    this.mentors.push(newMentor);
    return this.mentors;
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

export default Cohort;
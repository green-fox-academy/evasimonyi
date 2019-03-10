'use strict';
export { };

class Person {
	name: string;
	age: number;
	gender: string;

	constructor(name = 'Jane Doe', age = 30, gender = 'female') {
		this.name = name;
		this.age = age;
		this.gender = gender;
	};

	Introduce() {
		console.log('Hi, I\'m ' + this.name + 'a ' + this.age + ' year old ' + this.gender);
	};

	GetGoal() {
		console.log("My goal is: Live for the moment!");
	};
};

class Student extends Person {
	previousOrganization: string; //the name of the student’s previous company / school
	skippedDays: number; //the number of days skipped from the course

	constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life', skippedDays = 0) {
		super(name, age, gender);
		this.previousOrganization = previousOrganization;
		this.skippedDays = skippedDays;
	};

	Introduce() {
		console.log('Hi, I\'m ' + this.name + ' a ' + this.age + ' year old ' + this.gender + ' from ' + this.previousOrganization + ' who skipped ' + this.skippedDays + ' days from the course already.');
	};

	GetGoal() {
		console.log("Be a junior software developer.");
	};

	SkipDays(numberOfDays) {
		return this.skippedDays + numberOfDays
	};
}

class Mentor extends Person {
	level: string; //the level of the mentor (junior / intermediate / senior)

	constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
		super(name, age, gender);
		this.level = level;
	}

	GetGoal() {
		console.log("Educate brilliant junior software developers.");
	};

	Introduce() {
		console.log('Hi, I\'m ' + this.name + ' a ' + this.age + ' year old ' + this.gender + this.level + ' mentor');
	};
}

class Sponsor extends Person {
	company: string; // name of the company
	hiredStudents: number; //number of students hired

	constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google', hiredStudents = 0) {
		super(name, age, gender);
		this.company = company;
		this.hiredStudents = hiredStudents;
	};

	Introduce() {
		console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' old ' + this.gender + ' who represents ' + this.company + ' and hired ' + this.hiredStudents + ' students so far.');
	}

	Hire() {
		return this.hiredStudents + 1;
	};

	GetGoal() {
		console.log("Hire brilliant junior software developers.");
	};

}

class Cohort {
	name: string; //the name of the cohort
	students = 0; //a list of Students
	mentors = 0; //a list of Mentors

	constructor(name) {
		this.name = name;
	};

	addStudent(Student) {
		this.students++;//adds the given Student to students list
	};

	addMentor(Mentor) {
		this.mentors++; //adds the given Mentor to mentors list
	};

	info() {
		console.log('The ' + this.name + ' cohort has ' + this.students + ' students and ' + this.mentors + ' mentors.');
	};
}

//Test input

var people: Person[] = new Array; //new List <Person> ();

var mark = new Person("Mark", 46, "male");
people.push(mark);
var jane = new Person();
people.push(jane);
var john = new Student("John Doe", 20, "male", "BME");
people.push(john);
var student = new Student();
people.push(student);
var gandhi = new Mentor("Gandhi", 148, "male", "senior");
people.push(gandhi);
var mentor = new Mentor();
people.push(mentor);
var sponsor = new Sponsor();
people.push(sponsor);
var elon = new Sponsor("Elon Musk", 46, "male", "SpaceX");
people.push(elon);

student.SkipDays(3);

for (let i = 0; i < 5; i++) {
	elon.Hire();
}

for (let i = 0; i < 3; i++) {
	sponsor.Hire();
}

people.forEach(function (person) {
	person.Introduce();
	person.GetGoal();
});

let awesome = new Cohort("AWESOME");
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();

//Test output

/*Hi, I'm Mark, a 46 year old male.
My goal is: Live for the moment.
Hi, I'm Jane Doe, a 30 year old female.
My goal is: Live for the moment.
Hi, I'm John Doe, a 20 year old male from BME who skipped 0 days from the course already.
My goal is: Be a junior software developer.
Hi, I'm Jane Doe, a 30 year old female from The School of Life who skipped 3 days from the course already.
My goal is: Be a junior software developer.
Hi, I'm Gandhi, a 148 year old male senior mentor.
My goal is: Educate brilliant junior software developers.
Hi, I'm Jane Doe, a 30 year old female intermediate mentor.
My goal is: Educate brilliant junior software developers.
Hi, I'm Jane Doe, a 30 year old female who represents Google and hired 5 students so far.
My goal is: Hire brilliant junior software developers.
Hi, I'm Elon Musk, a 46 year old male who represents SpaceX and hired 3 students so far.
My goal is: Hire brilliant junior software developers.
The AWESOME cohort has 2 students and 2 mentors.
*/
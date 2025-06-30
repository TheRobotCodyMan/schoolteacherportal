// lets the teacher sign in to their account

// the teacher's account contains: 
// 	1. name 
// 	2. age 
// 	3. appropriate section/s 
// 	4. department/subject 
// 	5. position

// the teacher have an ability to:
//	1. see their students' info
//	2. alter/add/decrease their students' scores
//	3. provide additional information about their students

// the students' info must include
//	1. name
//	2. section
//	3. grade
//	4. age
//	5. grades
//		a. total score
//		b. average grade
//		c. grade of each subject
//			A. total score
//			B. average grade
//			C. score of activity/performance tasks/exams/ and recitation

// Process:
// Step 1 - Let teacher enter their credentials to log in
// Step 2 - Direct teacher to "home page", listing methods that the teacher can do

let teacherDataArray = [];
let studentDataArray = [];

class Teacher {
	constructor(firstName, lastName, age, section, department, position) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.appropriateSection = section;
		this.department = department;
		this.position = position;
	}
	
	teacherDataPresentation() {
		alert(`Your data consists of the following: ${this.lastName}, ${this.firstName}, ${this.age} years old, ${this.position} at the ${this.department} department. You currently handle ${this.section}.`);
	}
}
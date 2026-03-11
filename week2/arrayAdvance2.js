// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let pass=students.filter(element=>element.marks>=40)
console.log(pass)

let grade=students.map(element => {
  if (element.marks >= 90) {
    element.grade = "A";
  } else if (element.marks >= 75) {
    element.grade = "B";
  } else if (element.marks >= 60) {
    element.grade = "C";
  } else {
    element.grade = "D";
  }
 return element
});
console.log(grade)


let average=students.reduce((accumulator,next)=>accumulator+next.marks,0)/students.length
console.log(average)

let student=students.find(element=>element.marks==92)
console.log(student)

let index=students.findIndex(element=>element.name=="Kiran")
console.log(index)
// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

const courses = ["javascript", "react", "node", "mongodb", "express"];
let names=courses.filter(element=>element.length>5)
console.log(names)
let uppercase=courses.map(element=>element.toUpperCase())
console.log(uppercase)
let string=uppercase.join(" | ")
console.log(string)
let findreact=courses.find(element=>element=="react")
console.log(findreact)
let node=courses.findIndex(element=>element=="node")
console.log("index of node is ",node)
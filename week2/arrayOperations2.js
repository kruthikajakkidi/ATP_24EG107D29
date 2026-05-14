//Operations on Arrays
const courses = ["javascript", "react", "node", "mongodb", "express"];

//     1. filter() courses with name length > 5
let names=courses.filter(element=>element.length>5)
console.log(names)

//     2. map() to convert course names to uppercase
let uppercase=courses.map(element=>element.toUpperCase())
console.log(uppercase)

//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let string=uppercase.join(" | ")
console.log(string)

//     4. find() the course "react"
let findreact=courses.find(element=>element=="react")
console.log(findreact)

//     5. findIndex() of "node"
let node=courses.findIndex(element=>element=="node")
console.log("index of node is ",node)

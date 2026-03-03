// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

const marks = [78, 92, 35, 88, 40, 67];
let pass=marks.filter(element=>element>=40)
console.log(marks)
let gracemarks=marks.map(element=>element+5)
console.log(gracemarks)
let highest=marks.reduce((accumulator,element)=>{if (accumulator>element){
    return accumulator
}
else{
    return element
}
})
console.log(highest)
let index=marks.findIndex(element=>element==92)
console.log(index)
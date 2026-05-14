//Operations on Array
const marks = [78, 92, 35, 88, 40, 67];

//     1. filter() marks ≥ 40 (pass marks)
let pass=marks.filter(element=>element>=40)
console.log(marks)

//     2. map() to add 5 grace marks to each student
let gracemarks=marks.map(element=>element+5)
console.log(gracemarks)

//     3. reduce() to find highest mark
let highest=marks.reduce((accumulator,element)=>{if (accumulator>element){
    return accumulator
}
else{
    return element
}
})
console.log(highest)

//     4. find() first mark below 40
let below=marks.find(element=>element<40)
console.log(below)

//     5. findIndex() of mark 92
let index=marks.findIndex(element=>element==92)
console.log(index)

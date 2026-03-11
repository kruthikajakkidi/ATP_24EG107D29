//Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:


// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];

let r=temperatures.filter(element=>element>35 );
console.log(r)
let r1=temperatures.map(element=>(element-32)*5/9);
console.log(r1)
let sum=temperatures.reduce((accumulator,element)=>accumulator+element)
avg=sum/temperatures.length
console.log(avg)
let temp=temperatures.find(element=>element>40)
console.log(temp)
let tempindex=temperatures.findIndex(element=>element==28)
console.log(tempindex)
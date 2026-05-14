//Operations on Arrays
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//     1. filter() temperatures above 35
let r=temperatures.filter(element=>element>35 );
console.log(r)

//     2. map() to convert all temperatures from Celsius → Fahrenheit
let r1=temperatures.map(element=>(element-32)*5/9);
console.log(r1)

//     3. reduce() to calculate average temperature
let sum=temperatures.reduce((accumulator,element)=>accumulator+element)
avg=sum/temperatures.length
console.log(avg)

//     4. find() first temperature above 40
let temp=temperatures.find(element=>element>40)
console.log(temp)

//     5. findIndex() of temperature 28
let tempindex=temperatures.findIndex(element=>element==28)
console.log(tempindex)

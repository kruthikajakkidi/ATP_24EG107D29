// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"


let instocks=cart.filter(element=>(element.inStock))
console.log(instocks)

let array=cart.map(element=>({"name":element.name,"price":element.price}))
console.log(array)

let sum=cart.reduce((acc,Obj)=>acc+Obj.price,0)
console.log(sum)

let find=cart.find(element=>(element.name=="Mouse"))
console.log(find)

let findIndex=cart.findIndex(element=>(element=="Keyboard"))
console.log(findIndex)





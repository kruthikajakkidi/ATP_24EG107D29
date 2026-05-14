//ARRAY METHODS
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//     1. Use filter() to get only inStock products
let instocks=cart.filter(element=>(element.inStock))
console.log(instocks)

//     2. Use map() to create a new array with:  { name, totalPrice }
let array=cart.map(element=>({"name":element.name,"price":element.price}))
console.log(array)

//     3. Use reduce() to calculate grand total cart value
let sum=cart.reduce((acc,Obj)=>acc+Obj.price,0)
console.log(sum)

//     4. Use find() to get details of "Mouse"
let find=cart.find(element=>(element.name=="Mouse"))
console.log(find)

//     5. Use findIndex() to find the position of "Keyboard"
let findIndex=cart.findIndex(element=>(element=="Keyboard"))
console.log(findIndex)

// 💡 Exercise 1: Copy & Extend an Array

//                         Goal: Learn array copying with spread
                        
//                         You are given:
//                                 let fruits = ["apple", "banana"];
                        
                        
//                         Tasks
//                               -> Create a new array moreFruits
                              
//                               -> Copy all fruits from fruits
                              
//                               -> Add "orange" at the end using spread
                              
//                               -> Print both arrays
                        
                        
//                         ✅ Expected Output
//                               ["apple", "banana"]
//                               ["apple", "banana", "orange"]
                        
//                         👉 Original array should NOT change.
 let fruits = ["apple", "banana"];
 let morefruits=[...fruits,"orange"]
 console.log(fruits)
 console.log(morefruits)


//  💡 Exercise 2: Update User Object
                        
//                         Goal: Learn object cloning & adding new property
                        
//                         You are given:
                                
//                                 let user = {
//                                   name: "Ravi",
//                                   city: "Hyderabad"
//                                 };
                        
                        
                        
//                         Tasks
                        
//                               -> Create a new object updatedUser
                              
//                               -> Copy all properties from user
                              
//                               -> Add a new property age: 25
                              
//                               -> Print both objects
                        
                        
                        
//                         ✅ Expected Output
//                               { name: "Ravi", city: "Hyderabad" }
//                               { name: "Ravi", city: "Hyderabad", age: 25 }
                        
//                         👉 Original object should remain unchanged.

let user={
name:"Ravi",
city:"Hyderabad"
}

let updatedUser=structuredClone(user)
updatedUser.age=25

console.log(user)
console.log(updatedUser)

function sum(...a){
let sums=0
for(let ele of a){
sums+=ele
}
return sums
}


// 💡 Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter

function sum(...args){
return args.reduce((total,num)=>total+num,0)
}
let result=sum(2,3,4,5,6)
console.log(result)
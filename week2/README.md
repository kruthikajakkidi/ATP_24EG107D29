## Week-2 Assignments

### Overview:
This week covers array methods, asynchronous JavaScript, object copying, REST APIs with Express.js, and modular ES module design.

### Definitions:
#### Array Methods: 
Built-in JavaScript methods used to perform operations on arrays.
#### filter(): 
Returns elements that satisfy a condition.
#### map(): 
Creates a new array by transforming elements.
#### reduce():
Reduces array elements into a single value.
#### find(): 
Returns the first matching element from an array.
#### findIndex(): 
Returns the index of the first matching element.
#### Asynchronous JavaScript: 
Allows execution of tasks without blocking the main program flow.
#### setTimeout(): 
Executes a function after a specified delay.
#### setInterval(): 
Repeatedly executes a function at fixed intervals.
#### clearInterval(): 
Stops an interval timer.
#### Shallow Copy: 
Copies only top-level properties of an object.
#### Deep Copy: Creates a completely independent copy including nested objects.
#### structuredClone():
Method used for deep copying objects in JavaScript.
#### REST API: 
Interface that allows communication between client and server using HTTP methods.
#### CRUD Operations: 
Create, Read, Update, and Delete operations on data.
#### Express.js: 
Node.js framework used for building APIs and web applications.
#### ES Modules: 
Modular JavaScript system using import and export.
### TASKS:
1. Array Methods\
-Performed filter(), map(), reduce(), find(), findIndex() on arrays and arrays of objects.
2. Asynchronous Functions
-Exam Portal Simulator – Uses setTimeout() for delayed execution.
-OTP Countdown Simulator – Uses setInterval() and clearInterval() for countdown functionality.
3. Copying Objects
-Shallow Copy – Uses spread operator (...) to copy objects and demonstrate shared nested references.
-Deep Copy – Uses structuredClone() to create a fully independent copy of nested objects.
4. Product API
-A simple REST API built with Node.js and Express.js to perform CRUD operations (Create, Read, Update, Delete) on an in-memory products list.
5. Todo App
-A modular task management system using ES modules with separate files for validation, task operations, and app logic — supports add, view, and complete task features.
### Technologies Used
JavaScript\
Node.js\
Express.js\
VS Code
### How to Run
1.Open folder in VS Code\
2.Install dependencies (for API/Todo tasks):\
bash: npm install\
3.Run using Node.js:\
bash: node filename.js\
4.For the Product API:\
bash: node index.js\
Then test endpoints via browser or Postman at localhost:3000

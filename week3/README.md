## WEEK-3 ASSIGNMNETS
### Overview:

This project is a simple REST API for managing products using Node.js, Express, and MongoDB with Mongoose validation.

### Definitions:
#### REST API: 
An interface that allows communication between client and server using HTTP methods.
#### Node.js: 
JavaScript runtime used to execute server-side applications.
#### Express.js:
Lightweight Node.js framework used to build APIs and web applications.
#### MongoDB: 
NoSQL database used to store application data in collections and documents.
#### Mongoose: 
ODM library used to interact with MongoDB and define schemas/models.
#### Schema Validation:
Process of checking whether data follows predefined rules before storing it.
#### CRUD Operations:
Create, Read, Update, and Delete operations performed on database records.
#### Create Operation: 
Adds new data to the database.
#### Read Operation: 
Retrieves data from the database.
#### Update Operation:
Modifies existing data in the database.
#### Delete Operation:
Removes data from the database.
#### Product Schema:
Structure that defines product fields and validation rules.
#### Error Handling: 
Technique used to detect and manage application errors properly.
#### cookie-parser: 
Middleware used to parse cookies in Express applications.
#### Middleware: 
Functions that execute between request and response in Express.js.
#### Database Connection: 
Establishing communication between the application and MongoDB.
#### Postman: 
API testing tool used to send requests and view responses.
#### HTTP Methods: 
Request methods like GET, POST, PUT, and DELETE used in APIs.

### Features:
1. Create Product:
Adds a new product to the database
Saves product details like name, price, brand, etc.
2. Read Products:
Retrieves all products from the database
Retrieves a single product using its unique ID
3. Update Product:
Updates existing product information
Only modifies provided fields while keeping others unchanged
4. Delete Product:
Removes a product from the database
Returns the deleted product as confirmation
5. Schema Validation:
Ensures valid product data before saving
Enforces rules like required fields and price limits
6. Error Handling:
Handles invalid input and database errors
Returns proper error messages for debugging

### Technologies Used:
Node.js \
Express.js \
MongoDB \
Mongoose \
cookie-parser \
VS Code

### How to Run:
Open the project folder in VS Code\
Run npm install to install dependencies\
Start MongoDB using mongodb\
Run the server using node filename.js\
Use Postman or Rest Client to test the API\
Make sure MongoDB is connected before starting the server

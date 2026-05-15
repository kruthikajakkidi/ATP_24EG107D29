## WEEK-3 ASSIGNMNETS
### Overview:

This project is a simple REST API for managing products using Node.js, Express, and MongoDB with Mongoose validation.

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

// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
 const user = {
                id: 101,
                namee: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

let shallow={...user}
shallow.name="Kiran"
shallow.preferences.theme="light"
console.log(user)
console.log(shallow)

// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

let deep=structuredClone(order)
deep.customer.address.city="Chennai"
deep.items[0].price=50000
console.log(order)
console.log(deep)
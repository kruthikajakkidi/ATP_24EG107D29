
import exp from 'express'

// create express application
const app = exp()

// middleware to parse JSON data
app.use(exp.json())

// server port number
const port = 6363

// start server
app.listen(port, () => console.log(`server listening to port ${port}...`))

// in-memory products array
let products = []

// get all products
app.get('/products', (req, res) => {
  res.json({ message: "all products", payload: products })
})

// get product by brand name
app.get('/products/:brand', (req, res) => {

  // read brand from params
  let brandName = req.params.brand

  // find matching product
  let product = products.find(
    element => element.brand.toLowerCase() === brandName.toLowerCase()
  )

  // if product found
  if (product) {
    res.json({ message: "product found", payload: product })
  }

  // if product not found
  else {
    res.json({ message: "product not found" })
  }
})

// add new product
app.post('/products', (req, res) => {

  // read request body
  const newProduct = req.body

  // add product to array
  products.push(newProduct)

  // send response
  res.json({ message: "product added" })
})

// update product by productId
app.put('/products/:productId', (req, res) => {

  // read product id
  let idOf = Number(req.params.productId)

  // modified product data
  let modifiedProduct = req.body

  // find index of product
  let index = products.findIndex(
    userObj => userObj.productId == idOf
  )

  // if product not found
  if (index == -1)
    return res.json({ message: "not found" })

  // replace old product with updated product
  products.splice(index, 1, modifiedProduct)

  // send response
  res.json({ message: "updated" })
})

// delete product by productId
app.delete('/products/:productId', (req, res) => {

  // read product id
  let idOfProduct = Number(req.params.productId)

  // find index of product
  let index = products.findIndex(
    element => element.productId == idOfProduct
  )

  // if product not found
  if (index == -1)
    return res.json({ message: "not found" })

  // remove product from array
  products.splice(index, 1)

  // send response
  res.json({ message: "deleted" })
})
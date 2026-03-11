import exp from 'express'

const app = exp()

app.use(exp.json())

const port = 6363

app.listen(port, () => console.log(`server listening to port ${port}...`))

let products = []

app.get('/products', (req, res) => {
  res.json({ message: "all products", payload: products })
})

app.get('/products/:brand', (req, res) => {
  let brandName = req.params.brand

let product = products.find(
 element => element.brand.toLowerCase() === brandName.toLowerCase()
  )
  if (product) {res.json({ message: "product found", payload: product })
  } 
else {
    res.json({ message: "product not found" })
  }
})

app.post('/products', (req, res) => {
  const newProduct = req.body
  products.push(newProduct)
  res.json({ message: "product added" })
})

app.put('/products/:productId', (req, res) => {
  let idOf = Number(req.params.productId)
  let modifiedProduct = req.body
  let index = products.findIndex(userObj => userObj.productId == idOf)
  if (index == -1) 
    return res.json({ message: "not found" })
  products.splice(index, 1, modifiedProduct)
  res.json({ message: "updated" })
})

app.delete('/products/:productId', (req, res) => {
  let idOfProduct = Number(req.params.productId)
  let index = products.findIndex(element => element.productId == idOfProduct)
  if (index == -1) 
    return res.json({ message: "not found" })
  products.splice(index, 1)
  res.json({ message: "deleted" })
})
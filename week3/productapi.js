  import exp from 'express'
  import {ProductModel} from '../models/ProductModel.js'
  import {hash} from 'bcryptjs'
  export const productApp=exp.Router()
  
 
  //new product
productApp.post("/products",async(req,res)=>{
      //get new req
      const newProduct=req.body
    
      //new user doc
      const newProductDocument=new ProductModel(newProduct)
      //save
      const result=await newProductDocument.save()
      console.log("result:",result)
      //send res
      res.status(201).json({message:"product added"})//201:success
      })
 
  
  //read all product
  productApp.get("/products",async(req,res)=>{
      //read all product from db
      let productsList=await ProductModel.find() 
      //send res
      res.status(200).json({message:"products",payload:productsList})
  })
  
  //read user by prod id
  productApp.get("/products/:productId",async(req,res)=>{
      //read obj id from param
      const uid=req.params.productId
      //find
      const productObj=await ProductModel.findById(uid)
      //IF user not found
      if(!productObj){
        return res.status(404).json({message:"product not found"})
      }
      //send
      res.status(200).json({message:"product",payload:productObj})
//update product by productId
productApp.put("/products/:productId",async(req,res)=>{
    const modifiedProduct=req.body
    const uid=req.params.productId

    const updatedProduct=await ProductModel.findByIdAndUpdate(
        uid,
        {$set:{...modifiedProduct}},
        {new:true,runValidators:true}
    )

    res.status(200).json({message:"product modified",payload:updatedProduct})
})

//delete product by productId
productApp.delete("/products/:productId",async(req,res)=>{
    let uid=req.params.productId

    let deletedProduct=await ProductModel.findByIdAndDelete(uid)

    if(!deletedProduct){
        return res.status(404).json({message:"not found"})
    }

    res.status(200).json({message:"product deleted",payload:deletedProduct})
})
  })
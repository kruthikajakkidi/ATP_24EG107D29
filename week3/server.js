
import exp from 'express'
import mongoose from "mongoose";
import {connect} from 'mongoose'
import { userApp } from './APIs/userapi.js'
import cookieParser from 'cookie-parser';

const app=exp()
//ADD BODY
app.use(exp.json())

//add cookie parser middleware
app.use(cookieParser())

//forwad req to UserApp if path satrt with /user-api
app.use("/user-api",userApp)

//connect to db server
async function connectDB(){
try{
    await mongoose.connect("mongodb://localhost:27017/mydb1")
    console.log("db connection success")
    //srt server
app.listen(4000,()=>console.log("server on port 4000.."))
    
}
catch(err){
    console.log("err is db connection:",err)
}
}

connectDB()

//err handling middleware
app.use((err,req,res,next)=>{
    //Validationerror
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"error occured",error:err.message})
    }
    //casterror
     if(err.name==="CastError"){
        return res.status(400).json({message:"error occured",error:err.message})
}
//send serer side error
res.status(500).json({message:"error occured",error:"server side error"})

})



// import exp from 'express'
// import mongoose from "mongoose";
// import {connect} from 'mongoose'
// import { productApp } from './APIs/productapi.js'

// const app=exp()
// //ADD BODY
// app.use(exp.json())

// //forwad req to UserApp if path satrt with /user-api
// app.use("/product-api",productApp)

// //connect to db server
// async function connectDB(){
// try{
//     await mongoose.connect("mongodb://localhost:27017/mydb1")
//     console.log("db connection success")
//     //srt server
// app.listen(4000,()=>console.log("server on port 4000.."))
    
// }
// catch(err){
//     console.log("err is db connection:",err)
// }
// }

// connectDB()

// //err handling middleware
// app.use((err,req,res,next)=>{
//     //Validationerror
//     if(err.name==="ValidationError"){
//         return res.status(400).json({message:"error occured",error:err.message})
//     }
//     //casterror
//      if(err.name==="CastError"){
//         return res.status(400).json({message:"error occured",error:err.message})
// }
// //send serer side error
// res.status(500).json({message:"error occured",error:"server side error"})

// })

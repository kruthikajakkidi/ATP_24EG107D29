import "dotenv/config";
import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";

const app = exp();

// CORS middleware
app.use(cors({
  // origin: process.env.FRONTEND_URL || 
  origin:"http://localhost:5173",
}));

// Body parser middleware
app.use(exp.json());

// Emp API middleware
app.use("/emp-api", empRoute);

async function  connectDB(){
    try{
        await connect("mongodb://localhost:27017/week6_emp")
        console.log("DB connected sucessfully")
        
        // start server
        app.listen(4000,()=>console.log("server on port 4000..."))
    }catch (err){
        console.log("Error in connection:",err)
    }
}
connectDB()


// Error handling middleware
app.use((err, req, res, next) => {
  console.log("Error in middleware:", err.message);
  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
import "dotenv/config";
import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";

const app = exp();

// CORS middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
}));

// Body parser middleware
app.use(exp.json());

// Emp API middleware
app.use("/emp-api", empRoute);

// DB connection
const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("DB connected");
    app.listen(process.env.PORT || 4000, () =>
      console.log("Server listening on port", process.env.PORT || 4000)
    );
  } catch (err) {
    console.log("Error in DB connection:", err.message);
  }
};

connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.log("Error in middleware:", err.message);
  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
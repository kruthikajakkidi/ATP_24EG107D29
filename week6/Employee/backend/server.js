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

async function connectDB() {
  try {
    await connect(process.env.MONGO_URI);  // ✅ Use env variable
    console.log("DB connected successfully");

    const PORT = process.env.PORT || 4000;  // ✅ Use Render's port
    app.listen(PORT, () => console.log(`Server on port ${PORT}...`));

  } catch (err) {
    console.log("Error in connection:", err);
    process.exit(1);
  }
}
connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.log("Error in middleware:", err.message);
  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
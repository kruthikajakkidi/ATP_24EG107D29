import "dotenv/config";
import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err.message);
  console.error(err.stack);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
  process.exit(1);
});

const app = exp();

console.log("Starting server...");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("DB_URL present:", !!process.env.DB_URL);
console.log("PORT:", process.env.PORT);

app.use(
  cors({
    origin: ["https://employeeweek6.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(exp.json());

app.get("/", (req, res) => {
  res.json({ status: "API is running", message: "use /emp-api" });
});

app.use("/emp-api", empRoute);

app.use((err, req, res, next) => {
  console.error("Error in middleware:", err.message);
  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});

async function connectDB() {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL environment variable is not set!");
    }

    console.log("Connecting to MongoDB...");
    await connect(process.env.DB_URL);
    console.log("DB connected successfully");

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
  } catch (err) {
    console.error("Error in DB connection:", err.message);
    process.exit(1);
  }
}

connectDB();
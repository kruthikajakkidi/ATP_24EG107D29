import "dotenv/config";
import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";

const app = exp();

const corsOptions = {
  origin: [
    "https://employeeweek6.vercel.app",
    "http://localhost:5173",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));


app.use(exp.json());

app.get("/", (req, res) => {
  res.json({
    status: "API is running",
    message: "use /emp-api",
  });
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
    await connect(process.env.MONGO_URI);

    console.log("DB connected successfully");

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`Server on port ${PORT}...`);
    });
  } catch (err) {
    console.error("Error in DB connection:", err.message);
    process.exit(1);
  }
}

connectDB();
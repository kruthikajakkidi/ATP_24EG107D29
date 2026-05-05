import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import { authorApp } from "./APIs/authorapi.js";
import { commonApp } from "./APIs/commonapi.js";
import { userApp } from "./APIs/userapi.js";
import { adminApp } from "./APIs/adminapi.js";
import cors from "cors";
config();
const app = exp();

app.use(cors({
  origin:[ "http://localhost:5173",
  "http://localhost:5174",
"https://blog-app-rust-xi.vercel.app"],
  credentials: true,
}));
app.use(exp.json());
app.use(cookieParser());

// Routes
app.use("/author-api", authorApp);
app.use("/auth", commonApp);
app.use("/user-api", userApp);
app.use("/admin-api", adminApp);

// Connect to DB
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("db connection success");
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`server listening to port ${port}...`));
  } catch (err) {
    console.log("error in db connection", err);
  }
};
connectDB();

// Handle invalid paths
app.use((req, res) => {
  res.status(404).json({ message: `path ${req.url} is invalid` });
});

// Handle errors
app.use((err, req, res, next) => {
  res.status(500).json({ message: "error occurred", error: "server side error" });
});
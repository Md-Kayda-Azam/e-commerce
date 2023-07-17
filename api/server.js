import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import mongoDBConnect from "./config/db.js";
import { errorHandle } from "./middlewares/errorHandler.js";

// init express
const app = express();
dotenv.config();

/// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// static
app.use(express.static("/api/public"));

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);

// server port
const PORT = process.env.PORT || 5056;

// error handler
app.use(errorHandle);

app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Server running on port ${PORT}`.bgGreen.black);
});

import express from "express";
import bodyParser from "body-parser";
import cookieParse from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
  }),
);
app.use(compression());
app.use(cookieParse());
app.use(bodyParser.json());

const MONGO_URL = process.env.MONGODB_URI;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL).finally(() => {
  console.log("Connected to database");
});
mongoose.connection.on("error", (error: Error) =>
  console.log("Error connecting to database", error),
);

app.use("/", router());
export default app;

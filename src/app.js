import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };

import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  console.log("hello world");
  res.status(201).json("hello world");
});

app.get("/about", (req, res) => {
  res.status(201).json("hello about page");
});

app.listen(process.env.PORT, () =>
  console.log(`server is up and running on port ${process.env.PORT}`)
);

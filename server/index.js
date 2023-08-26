import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"
import quizRoutes from "./routes/quizRoutes.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
const GK_URL = process.env.GK_URL

//middleWares------------------------------------------------------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/gkQuestions", quizRoutes);

//baseServer------------------------------------------------------------------------------------------------

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the quiz app.....");
});

//we_received_unknown---------------------------------------------------------------------------------------
app.all("*", (req, res) => {
  res
    .status(404)
    .send(`<h1>Page not found</h1> <a href="/">Click here go to homepage</a>`);
});

//serverPort listen fn--------------------------------------------------------------------------------------
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server connected to the database successfully`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

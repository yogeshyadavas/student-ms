const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const studentRouter = require("./routes/students.js");

app.use("/student", studentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

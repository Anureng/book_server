const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const createBook = require("./routes/book");
const getBookId = require("./routes/book");
const allBook = require("./routes/book");
const deleteBook = require("./routes/book");
const updateBook = require("./routes/book");
const Rate = require("./routes/book");
const Review = require("./routes/book");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const app = express();

const port = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(express.json());

app.use(cors(corsOptions));

const url = process.env.MONGO_URI;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

mongoose
  .connect(url)
  .then(() => {
    console.log("Successfully Connected 😁👌");
  })
  .catch((err) => {
    console.log("Not able to connect to the database", err);
  });

// Create Book Route

app.use("/api", createBook);
app.use("/api", getBookId);
app.use("/api", allBook);
app.use("/api", deleteBook);
app.use("/api", updateBook);
app.use("/api", Rate);
app.use("/api", Review);

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  genre: String,
  type: String,
  author: String,
  review: [
    {
      type: Number,
    },
  ],
  rating: [
    {
      type: Number,
    },
  ],
});

module.exports = mongoose.model("Book", bookSchema);

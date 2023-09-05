const Book = require("../Model/Book");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dd8ckn2oz",
  api_key: "822572954714859",
  api_secret: "Z1JhP7NlqSJtVNrwbBJje_Q6ynA",
});

exports.createBook = async (req, res) => {
  try {
    const file = req.files.photo;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images",
    });
    const book = await Book.create({
      name: req.body.name,
      description: req.body.description,
      image: result.secure_url,
      price: req.body.price,
      genre: req.body.genre,
      type: req.body.type,
      author: req.body.author,
    });

    console.log(result);
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
};

exports.allBook = async (req, res) => {
  try {
    const book = await Book.find({}).sort({ createdAt: -1 });
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getBookId = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({ _id: id });
    if (!book)
      return res.status(404).json({ message: "Book is already exists" });
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOneAndDelete({ _id: id });
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
};

exports.Rate = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOneAndUpdate({ _id: id });
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
};

exports.Review = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOneAndUpdate({ _id: id });
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
};

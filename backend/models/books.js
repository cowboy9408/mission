const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  quantity: { type: Number, required: true },
  image: String,
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

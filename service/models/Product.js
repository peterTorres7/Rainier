const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:  String,
  qty: Number,
  price: Number,
  user: String,
  date: {type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


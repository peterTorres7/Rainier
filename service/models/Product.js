const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  qty: { type: String },
  price: { type: String },
  user: { type: String },
  date: {type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


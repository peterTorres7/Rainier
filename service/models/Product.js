const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  qty: { 
    type: String, 
    required: true 
  },
  price: { type: String, required: true},
  user: { type: String },
  date: {type: Date, default: Date.now},
  img: { type: String },
  active: {type: Boolean, defualt: true},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


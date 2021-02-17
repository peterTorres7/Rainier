const mongoose = require('mongoose');

const transSchema = new mongoose.Schema({
  transTitle:  String,
  transedDate: { type: Date, default: Date.now },
  transAmouont: Number,
  user: String,
  description: String,
  status: String
});

const Transaction = mongoose.model('Transaction', transSchema);

module.exports = Transaction;

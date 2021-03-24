const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  time: { type: Date },
  text: { type: String },
  isRead: { type: Boolean },
  sender: { type: String },
});

const conversation = mongoose.model('Conversation', conversationSchema);

module.exports = conversation;
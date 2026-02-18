const mongoose = require('mongoose'); // Use require if using CommonJS (Standard for Express)

const itemSchema = new mongoose.Schema({
  // Note: MongoDB provides _id automatically
  name: {
    type: String,
    required: [true, "Please add an item name"],
    trim: true
  },
  type: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  details: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);

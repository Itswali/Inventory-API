import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
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

export default mongoose.model('Item', itemSchema);

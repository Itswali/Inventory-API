import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter your name"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Enter your email"],
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
    minlength: [8, "Password must be at least 8 characters"],
    select: false,
  }
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


export default mongoose.model('User', userSchema);

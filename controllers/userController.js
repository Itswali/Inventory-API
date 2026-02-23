import User from '../models/userModel.js';
import ErrorHandler from '../middleware/ErrorHandler.js';
import bcrypt from 'bcryptjs';
// Added 'export' keyword
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please provide email and password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid credentials", 401));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new ErrorHandler("Invalid credentials", 401));
    }

    res.status(200).json({
      success: true,
      message: `Welcome back, ${user.name}`,
      user
    });
  } catch (error) {
    next(error);
  }
};

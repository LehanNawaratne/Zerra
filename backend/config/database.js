import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MONGODB_URI } from './env.js';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export default connectDB;

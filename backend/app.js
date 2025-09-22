import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Zerra Backend API is running!', 
    status: 'Connected to MongoDB' 
  });
});

// API Routes
app.use('/api/auth', authRoutes);


export default app;

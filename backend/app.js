import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cropRoutes from './routes/crops.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1/crops', cropRoutes);


// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Zerra Backend API is running!', 
    status: 'Connected to MongoDB' 
  });
});


export default app;

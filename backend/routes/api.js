import express from 'express';
import authRoutes from './auth.js';
import userRoutes from './users.js';
import cropRoutes from './crops.js';

const router = express.Router();

// Mount routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/crops', cropRoutes);

export default router;

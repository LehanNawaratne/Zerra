import express from 'express';
import { register, login, getProfile, updateProfile } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes (require authentication)
router.use(protect); // All routes after this middleware are protected

router.get('/profile', getProfile);
router.patch('/profile', updateProfile);

export default router;
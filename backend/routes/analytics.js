import express from 'express';
import { getCropAnalytics, getCropTypeAnalytics } from '../controllers/analyticsController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get overall crop analytics
router.get('/crops', auth, getCropAnalytics);

// Get analytics for a specific crop type
router.get('/crops/:type', auth, getCropTypeAnalytics);

export default router;
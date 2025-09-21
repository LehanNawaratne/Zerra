const express = require('express');
const { register, login, getProfile, updateProfile } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes (require authentication)
router.use(protect); // All routes after this middleware are protected

router.get('/profile', getProfile);
router.patch('/profile', updateProfile);

module.exports = router;
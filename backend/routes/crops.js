import express from 'express';
import { getAllCrops, addCrop, updateCrop, deleteCrop } from '../controllers/cropController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Apply authentication to all crop routes
router.use(protect);

// GET /crops - Get all crops (with optional status filter)
router.get('/', getAllCrops);

// POST /crops - Add a new crop
router.post('/', addCrop);

// PUT /crops/:id - Update a crop
router.put('/:id', updateCrop);

// DELETE /crops/:id - Delete a crop
router.delete('/:id', deleteCrop);

export default router;
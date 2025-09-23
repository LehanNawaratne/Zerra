import express from 'express';
import { 
  browseCrops, 
  reserveCrop, 
  getMyReservations, 
  getFarmerReservations, 
  updateReservationStatus 
} from '../controllers/reservationController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Apply authentication to all routes
router.use(protect);

// Buyer routes
router.get('/crops/browse', browseCrops);           // Browse all available crops
router.post('/crops/:id/reserve', reserveCrop);    // Reserve a specific crop
router.get('/my-reservations', getMyReservations); // Get buyer's reservations

// Farmer routes
router.get('/farmer-reservations', getFarmerReservations);  // Get reservations for farmer's crops
router.put('/reservations/:id/status', updateReservationStatus); // Update reservation status

export default router;
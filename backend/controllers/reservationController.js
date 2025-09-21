import Crop from '../models/Crop.js';
import Reservation from '../models/Reservation.js';
import mongoose from 'mongoose';

// Get all available crops for buyers to browse
const browseCrops = async (req, res) => {
  try {
    const { type, status } = req.query;
    const filter = { status: 'current' }; // Only show current crops to buyers
    
    if (type) {
      filter.type = type;
    }
    
    const crops = await Crop.find(filter)
      .populate('farmerId', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching crops', error: error.message });
  }
};

// Reserve a crop (buyers only)
const reserveCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const { reservedQuantity, pricePerUnit, notes } = req.body;
    const buyerId = req.user.id;
    
    // Find the crop
    const crop = await Crop.findById(id);
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    
    // Check if buyer is trying to reserve their own crop
    if (crop.farmerId.toString() === buyerId) {
      return res.status(400).json({ message: 'You cannot reserve your own crop' });
    }
    
    // Check if enough quantity is available
    if (reservedQuantity > crop.availableQuantity) {
      return res.status(400).json({ 
        message: 'Not enough quantity available',
        availableQuantity: crop.availableQuantity,
        requestedQuantity: reservedQuantity
      });
    }
    
    // Create reservation
    const reservation = new Reservation({
      buyerId,
      cropId: id,
      farmerId: crop.farmerId,
      reservedQuantity,
      pricePerUnit,
      notes
    });
    
    await reservation.save();
    
    // Update crop reserved quantity using the reserve method
    await crop.reserve(reservedQuantity);
    
    // Populate reservation data for response
    await reservation.populate('cropId', 'name type');
    await reservation.populate('farmerId', 'name email');
    
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: 'Error creating reservation', error: error.message });
  }
};

// Get buyer's reservations
const getMyReservations = async (req, res) => {
  try {
    const buyerId = req.user.id;
    
    const reservations = await Reservation.find({ buyerId })
      .populate('cropId', 'name type plantingDate harvestDate')
      .populate('farmerId', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reservations', error: error.message });
  }
};

// Get reservations for farmer's crops
const getFarmerReservations = async (req, res) => {
  try {
    const farmerId = req.user.id;
    
    const reservations = await Reservation.find({ farmerId })
      .populate('cropId', 'name type plantingDate harvestDate')
      .populate('buyerId', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching farmer reservations', error: error.message });
  }
};

// Update reservation status (farmer can confirm reservations)
const updateReservationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const farmerId = req.user.id;
    
    const reservation = await Reservation.findOneAndUpdate(
      { _id: id, farmerId },
      { status },
      { new: true }
    ).populate('cropId', 'name type')
     .populate('buyerId', 'name email');
    
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    
    res.json(reservation);
  } catch (error) {
    res.status(400).json({ message: 'Error updating reservation', error: error.message });
  }
};

export { 
  browseCrops, 
  reserveCrop, 
  getMyReservations, 
  getFarmerReservations, 
  updateReservationStatus 
};
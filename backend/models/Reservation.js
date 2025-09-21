import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cropId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crop',
    required: true
  },
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reservedQuantity: {
    type: Number,
    required: true,
    min: 1
  },
  reservationDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['reserved', 'confirmed', 'completed'],
    default: 'reserved'
  },
  pricePerUnit: {
    type: Number,
    required: true,
    min: 0
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Calculate total price before saving
reservationSchema.pre('save', function(next) {
  this.totalPrice = this.reservedQuantity * this.pricePerUnit;
  next();
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
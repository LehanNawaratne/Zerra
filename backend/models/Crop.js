import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['vegetable', 'fruit', 'grain', 'herb', 'other']
  },
  plantingDate: {
    type: Date,
    required: true
  },
  harvestDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['current', 'planned'],
    default: 'planned'
  },
  totalQuantity: {
    type: Number,
    required: true,
    min: 0
  },
  availableQuantity: {
    type: Number,
    required: true,
    min: 0
  },
  reservedQuantity: {
    type: Number,
    default: 0,
    min: 0
  },
  pricePerUnit: {
    type: Number,
    required: true,
    min: 0
  },
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Pre-save middleware to calculate available quantity
cropSchema.pre('save', function(next) {
  // Calculate available quantity
  this.availableQuantity = this.totalQuantity - this.reservedQuantity;
  
  // Ensure available quantity doesn't go negative
  if (this.availableQuantity < 0) {
    this.availableQuantity = 0;
  }
  
  next();
});

// Virtual field to check if crop is fully reserved
cropSchema.virtual('isFullyReserved').get(function() {
  return this.availableQuantity === 0;
});

// Method to reserve quantity
cropSchema.methods.reserve = function(quantity) {
  if (quantity > this.availableQuantity) {
    throw new Error('Not enough quantity available');
  }
  
  this.reservedQuantity += quantity;
  return this.save();
};

const Crop = mongoose.model('Crop', cropSchema);

export default Crop;
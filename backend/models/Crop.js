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
  quantity: {
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

const Crop = mongoose.model('Crop', cropSchema);

export default Crop;
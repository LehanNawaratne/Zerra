import Crop from '../models/Crop.js';

// Get all crops for a farmer
const getAllCrops = async (req, res) => {
  try {
    const { status } = req.query; // Filter by current or planned
    const filter = { farmerId: req.user.id };
    
    if (status) {
      filter.status = status;
    }
    
    const crops = await Crop.find(filter).sort({ createdAt: -1 });
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching crops', error: error.message });
  }
};

// Add a new crop
const addCrop = async (req, res) => {
  try {
    const { name, type, plantingDate, harvestDate, status, quantity } = req.body;
    
    const crop = new Crop({
      name,
      type,
      plantingDate,
      harvestDate,
      status,
      quantity,
      farmerId: req.user.id
    });
    
    await crop.save();
    res.status(201).json(crop);
  } catch (error) {
    res.status(400).json({ message: 'Error adding crop', error: error.message });
  }
};

// Update a crop
const updateCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const crop = await Crop.findOneAndUpdate(
      { _id: id, farmerId: req.user.id },
      updates,
      { new: true }
    );
    
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    
    res.json(crop);
  } catch (error) {
    res.status(400).json({ message: 'Error updating crop', error: error.message });
  }
};

// Delete a crop
const deleteCrop = async (req, res) => {
  try {
    const { id } = req.params;
    
    const crop = await Crop.findOneAndDelete({ _id: id, farmerId: req.user.id });
    
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    
    res.json({ message: 'Crop deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting crop', error: error.message });
  }
};

export { getAllCrops, addCrop, updateCrop, deleteCrop };
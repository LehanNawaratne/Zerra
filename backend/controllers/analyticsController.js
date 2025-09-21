import Crop from '../models/Crop.js';

// Get crop analytics - supply information for farmers
const getCropAnalytics = async (req, res) => {
  try {
    const analytics = await Crop.aggregate([
      {
        $group: {
          _id: '$type',
          totalQuantity: { $sum: '$quantity' },
          farmerIds: { $addToSet: '$farmerId' }
        }
      },
      {
        $project: {
          cropType: '$_id',
          totalQuantity: 1,
          farmerCount: { $size: '$farmerIds' },
          averageQuantity: {
            $cond: {
              if: { $eq: [{ $size: '$farmerIds' }, 0] },
              then: 0,
              else: { $divide: ['$totalQuantity', { $size: '$farmerIds' }] }
            }
          }
        }
      },
      {
        $sort: { totalQuantity: -1 }
      }
    ]);

    res.json({
      success: true,
      data: analytics,
      message: 'Crop analytics retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching crop analytics',
      error: error.message
    });
  }
};

// Get analytics for a specific crop type
const getCropTypeAnalytics = async (req, res) => {
  try {
    const { type } = req.params;

    const analytics = await Crop.aggregate([
      {
        $match: { type: type }
      },
      {
        $group: {
          _id: '$type',
          totalQuantity: { $sum: '$quantity' },
          farmerIds: { $addToSet: '$farmerId' },
          crops: {
            $push: {
              farmerId: '$farmerId',
              quantity: '$quantity',
              status: '$status'
            }
          }
        }
      },
      {
        $project: {
          cropType: '$_id',
          totalQuantity: 1,
          farmerCount: { $size: '$farmerIds' },
          averageQuantity: {
            $cond: {
              if: { $eq: [{ $size: '$farmerIds' }, 0] },
              then: 0,
              else: { $divide: ['$totalQuantity', { $size: '$farmerIds' }] }
            }
          },
          crops: 1
        }
      }
    ]);

    if (analytics.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No data found for crop type: ${type}`
      });
    }

    res.json({
      success: true,
      data: analytics[0],
      message: `Analytics for ${type} retrieved successfully`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching crop type analytics',
      error: error.message
    });
  }
};

export { getCropAnalytics, getCropTypeAnalytics };
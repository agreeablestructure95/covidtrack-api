const Resource = require('../models/Resource');

// GET /covid/hospitals/resources
const getResourceAvailability = async (req, res) => {
  try {
    const resources = await Resource.find({});
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /covid/hospitals/resources/update
const updateResource = async (req, res) => {
  const { region, bedsAvailable, ventilatorsAvailable, icuCapacity } = req.body;
  try {
    const updatedResource = await Resource.findOneAndUpdate(
      { region },
      { bedsAvailable, ventilatorsAvailable, icuCapacity },
      { new: true, upsert: true }
    );
    res.json(updatedResource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getResourceAvailability, updateResource };

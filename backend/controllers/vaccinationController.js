const Vaccination = require('../models/Vaccination');

// GET /covid/vaccination-status
const getVaccinationStatus = async (req, res) => {
  try {
    const vaccinationData = await Vaccination.find({});
    res.json(vaccinationData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getVaccinationStatus };

const Case = require('../models/Case');

// GET /covid/cases
const getAllCases = async (req, res) => {
  try {
    const cases = await Case.find({});
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /covid/cases/:region
const getCaseByRegion = async (req, res) => {
  const region = req.params.region;
  try {
    const caseData = await Case.findOne({ region });
    if (caseData) {
      res.json(caseData);
    } else {
      res.status(404).json({ message: 'Region not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /covid/cases/update
const updateCase = async (req, res) => {
  const { region, activeCases, recoveries, deaths } = req.body;
  try {
    const updatedCase = await Case.findOneAndUpdate(
      { region },
      { activeCases, recoveries, deaths },
      { new: true, upsert: true }
    );
    res.json(updatedCase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllCases, getCaseByRegion, updateCase };

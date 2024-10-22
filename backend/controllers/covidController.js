// backend/controllers/covidController.js
const Case = require('../models/Case'); // Import the Case model

// Get COVID-19 cases for Maharashtra
exports.getCasesByMaharashtra = async (req, res) => {
    try {
        const caseData = await Case.findOne({ region: 'Maharashtra' });
        if (!caseData) {
            return res.status(404).json({ message: 'Maharashtra not found' });
        }
        res.status(200).json(caseData);
    } catch (error) {
        console.error('Error fetching Maharashtra case data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get COVID-19 cases for Kerala
exports.getCasesByKerala = async (req, res) => {
    try {
        const caseData = await Case.findOne({ region: 'Kerala' });
        if (!caseData) {
            return res.status(404).json({ message: 'Kerala not found' });
        }
        res.status(200).json(caseData);
    } catch (error) {
        console.error('Error fetching Kerala case data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get COVID-19 cases for Karnataka
exports.getCasesByKarnataka = async (req, res) => {
    try {
        const caseData = await Case.findOne({ region: 'Karnataka' });
        if (!caseData) {
            return res.status(404).json({ message: 'Karnataka not found' });
        }
        res.status(200).json(caseData);
    } catch (error) {
        console.error('Error fetching Karnataka case data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get COVID-19 cases for Tamil Nadu
exports.getCasesByTamilnadu = async (req, res) => {
    try {
        const caseData = await Case.findOne({ region: 'Tamilnadu' });
        if (!caseData) {
            return res.status(404).json({ message: 'Tamil Nadu not found' });
        }
        res.status(200).json(caseData);
    } catch (error) {
        console.error('Error fetching Tamil Nadu case data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get COVID-19 cases for Delhi
exports.getCasesByDelhi = async (req, res) => {
    try {
        const caseData = await Case.findOne({ region: 'Delhi' });
        if (!caseData) {
            return res.status(404).json({ message: 'Delhi not found' });
        }
        res.status(200).json(caseData);
    } catch (error) {
        console.error('Error fetching Delhi case data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

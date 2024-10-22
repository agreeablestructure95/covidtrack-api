// backend/routes/covidRoutes.js
const express = require('express');
const router = express.Router();
const covidController = require('../controllers/covidController');

// Route to get COVID-19 cases for Maharashtra
router.get('/cases/Maharashtra', covidController.getCasesByMaharashtra);

// Route to get COVID-19 cases for Kerala
router.get('/cases/Kerala', covidController.getCasesByKerala);

// Route to get COVID-19 cases for Karnataka
router.get('/cases/Karnataka', covidController.getCasesByKarnataka);

// Route to get COVID-19 cases for Tamil Nadu
router.get('/cases/Tamilnadu', covidController.getCasesByTamilnadu);

// Route to get COVID-19 cases for Delhi
router.get('/cases/Delhi', covidController.getCasesByDelhi);

// You can add more routes here for other endpoints if necessary

module.exports = router;

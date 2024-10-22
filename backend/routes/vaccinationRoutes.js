const express = require('express');
const { getVaccinationStatus } = require('../controllers/vaccinationController');
const router = express.Router();

router.get('/', getVaccinationStatus);

module.exports = router;

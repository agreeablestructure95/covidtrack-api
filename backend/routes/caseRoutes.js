const express = require('express');
const { getAllCases, getCaseByRegion, updateCase } = require('../controllers/caseController');
const router = express.Router();

router.get('/', getAllCases);
router.get('/:region', getCaseByRegion);
router.post('/update', updateCase);

module.exports = router;

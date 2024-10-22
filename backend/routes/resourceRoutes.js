const express = require('express');
const { getResourceAvailability, updateResource } = require('../controllers/resourceController');
const router = express.Router();

router.get('/', getResourceAvailability);
router.post('/update', updateResource);

module.exports = router;

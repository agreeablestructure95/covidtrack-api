const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
  region: { type: String, required: true },
  bedsAvailable: { type: Number, required: true },
  ventilatorsAvailable: { type: Number, required: true },
  icuCapacity: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);

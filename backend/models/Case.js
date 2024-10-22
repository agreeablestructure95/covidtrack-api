const mongoose = require('mongoose');

const caseSchema = mongoose.Schema({
  region: { type: String, required: true },
  activeCases: { type: Number, required: true },
  recoveries: { type: Number, required: true },
  deaths: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Case', caseSchema);

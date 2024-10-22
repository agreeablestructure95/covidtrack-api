const mongoose = require('mongoose');

const vaccinationSchema = mongoose.Schema({
  region: { type: String, required: true },
  dosesGiven: { type: Number, required: true },
  populationVaccinated: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Vaccination', vaccinationSchema);

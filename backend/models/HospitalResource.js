const mongoose = require('mongoose');

const hospitalResourceSchema = new mongoose.Schema({
    region: {
        type: String,
        required: true,
        unique: true
    },
    bedsAvailable: {
        type: Number,
        required: true
    },
    ventilatorsAvailable: {
        type: Number,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('HospitalResource', hospitalResourceSchema);

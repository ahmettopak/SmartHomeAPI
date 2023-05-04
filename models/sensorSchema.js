const mongoose = require('mongoose');

const SensorScehema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    status: {
        type: mongoose.Schema.Types.Boolean,
        required: true,
        default: false,
    },

    value: {
        type: Number,
        required: true,
    },

})

module.exports = mongoose.model("sensor", SensorScehema)
const mongoose = require('mongoose');

const SensorScehema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    value: {
        type: Number,
        required: true,
    },

})

module.exports = mongoose.model("sensor", SensorScehema)
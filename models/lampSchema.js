const mongoose = require('mongoose');

const LampScehema = new mongoose.Schema({
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

})

module.exports = mongoose.model("lamp", LampScehema)

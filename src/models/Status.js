const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    damageDiceAmount: {
        type: Number,
        required: false
    },
    damageDiceRoll: {
        type: Number,
        required: false
    },
    rounds:{
        type: String,
        required: false
    },
    attributesModified: {
        type: [String],
        required: true
    },
    attributesModifiers: {
        type: Number,
        required: true
    }
});

mongoose.model("Status", StatusSchema);
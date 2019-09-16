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
    damageDiceId: {
        type: String,
        required: false
    },
    turns:{
        type: String,
        required: false
    }
});

mongoose.model("Status", StatusSchema);
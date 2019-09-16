const mongoose = require("mongoose");

const DiceSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    dice: {
        type: String,
        required: true
    }
});

mongoose.model("Dices", DiceSchema);
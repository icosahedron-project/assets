const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    // Header
    playerId: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    alignment: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },

    // Basic Attributes
    strength: {
        type: Number,
        required: true
    },
    dextery: {
        type: Number,
        required: true
    },
    constitution: {
        type: Number,
        required: true
    },
    intelligence: {
        type: Number,
        required: true
    },
    wisdom: {
        type: Number,
        required: true
    },
    charisma: {
        type: Number,
        required: true
    },

    // Second Attributes
    heathPoints: {
        type: Number,
        required: true
    },
    staminaPoints: {
        type: Number,
        required: false
    },
    magicPoints: {
        type: Number,
        required: false
    },

    // Other Attributes
    skillsIds: {
        type: [String],
        required: true
    },
    equipment: {
        type: [String],
        required: true
    },   
    inventory: {
        type: [String],
        required: true
    }
});

mongoose.model("Characters", CharacterSchema);
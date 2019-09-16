const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    statusSkilledId: {
        type: String,
        required: false
    },
    statusEnemyId: {
        type: String,
        required: false
    },
    damageDiceId:{
        type: String,
        required:false
    }
});

mongoose.model("Skills", SkillSchema);
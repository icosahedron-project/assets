const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    statusOwnerId:{
        type: String,
        required: false
    },
    statusEnemyId:{
        type: String,
        required: false
    },
    damageDiceAmount: {
        type: Number,
        required: false
    },
    damageDiceRoll: {
        type: Number,
        required: false
    }
});

mongoose.model("Items", ItemsSchema);
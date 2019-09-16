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
    ownerDiceId: {
        type: String,
        required: false
    },
    damageDiceId: {
        type: String,
        required: false
    }
});

mongoose.model("Items", ItemsSchema);
const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
    adventureName: {
        type: String,
        required: true
    },
    masterId: {
        type: String,
        required: true
    },
    playersIds: {
        type: [String],
        required: true
    },
    charactersIds:{
        type: [String],
        required:true
    }
});

mongoose.model("Table", TableSchema);
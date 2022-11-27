const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    _id: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: String, required: true },
});

module.exports = mongoose.model("Todo", TodoSchema);

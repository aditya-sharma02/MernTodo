const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true,
        enum: ["completed", "active"],
    }
})

const Todo = mongoose.model("todo", Schema);
module.exports = Todo
// User.createIndexes();
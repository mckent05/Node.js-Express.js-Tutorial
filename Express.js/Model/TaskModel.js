const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

const Task = new mongoose.model("Task", taskSchema)

module.exports = Task
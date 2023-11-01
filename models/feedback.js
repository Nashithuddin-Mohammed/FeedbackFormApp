const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feedbackSchema = new Schema({
    smuid: Number,
    profName: String, //Name of the professor
    courseTitle: String,
    courseCode: String,
    feedback: String,
})

module.exports = mongoose.model('Feedback', feedbackSchema); 
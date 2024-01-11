const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  feedback: String,
  rating: Number,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;

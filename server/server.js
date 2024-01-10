// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;
let uri =
  "mongodb+srv://b421037:05SHhlMglWqPfJR1@rajnishcluster01.ofhycom.mongodb.net/anonymous?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(uri);

// Create a Mongoose Schema for Feedback
const feedbackSchema = new mongoose.Schema({
  feedback: String,
  rating: Number,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// API endpoint to store feedback in MongoDB
app.post("/api/feedback", async (req, res) => {
  try {
    const { feedback, rating } = req.body;

    // Save feedback to MongoDB
    const newFeedback = new Feedback({ feedback, rating });
    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API endpoint to retrieve all feedback from MongoDB
app.get("/api/feedbacks", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

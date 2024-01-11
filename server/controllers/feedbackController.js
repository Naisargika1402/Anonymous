const Feedback = require("../models/feedback");

exports.submitFeedback = async (req, res) => {
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
};

exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

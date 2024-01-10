import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import axios from "axios";

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to submit feedback
      await axios.post("http://localhost:4000/api/feedback", {
        feedback,
        rating,
      });

      // If the request is successful, clear the inputs and reset the rating
      setFeedback("");
      setRating(0);

      // Call the onSubmit prop with the feedback data
      onSubmit({ feedback, rating });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      // Handle error if needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Feedback:
        <br />
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </label>
      <br />
      <label>
        Rating:
        <ReactStars
          count={5}
          value={rating}
          onChange={(newRating) => setRating(newRating)}
          size={24}
          color2={"#ffd700"}
        />
      </label>
      <br />
      <button type="submit" className="mb-3">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;

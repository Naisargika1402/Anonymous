// FeedbackForm.js

import React, { useState } from "react";
import ReactStars from "react-stars";

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ feedback, rating });
    setFeedback(""); // Clear the input after submission
    setRating(0); // Reset the rating
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

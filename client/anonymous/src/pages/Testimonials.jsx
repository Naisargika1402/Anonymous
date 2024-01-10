import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";

function Testimonials() {
  const [feedbackList, setFeedbackList] = useState([]);

  const handleFeedbackSubmit = ({ feedback, rating }) => {
    // Update your feedback list, or send it to a backend (if needed)
    setFeedbackList((prevFeedback) => [...prevFeedback, { feedback, rating }]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        {/* Display existing testimonials, if any */}
        <h2>Testimonials</h2>
        <div>
          <ul>
            {feedbackList.map((item, index) => (
              <li key={index}>
                <p>{item.feedback}</p>
                <p>Rating: {item.rating} stars</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Render the FeedbackForm component */}
        <h2>Submit Feedback</h2>
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
      </div>
      <Footer />
    </div>
  );
}

export default Testimonials;

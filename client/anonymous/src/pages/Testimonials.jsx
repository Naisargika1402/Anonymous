import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";
import axios from "axios";

function Testimonials() {
  const [feedbackList, setFeedbackList] = useState([]);

  const handleFeedbackSubmit = ({ feedback, rating }) => {
    // Update your feedback list, or send it to a backend (if needed)
    setFeedbackList((prevFeedback) => [...prevFeedback, { feedback, rating }]);
  };

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/feedback/all"
        );
        setFeedbackList(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Testimonials</h2>
        {/*<div>
          <ul>
            {feedbackList.map((item, index) => (
              <li key={index}>
                <p>{item.feedback}</p>
                <p>Rating: {item.rating} stars</p>
              </li>
            ))}
          </ul>
            </div>*/}

        <h2>Submit Feedback</h2>
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
      </div>
      <Footer />
    </div>
  );
}

export default Testimonials;

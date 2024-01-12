import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";
import axios from "axios";
import rajnish from "../assets/rajnish_photo.png";

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
        <h1 class="text-center mt-4">Testimonials</h1>
        <p class="text-center mt-3">
          Our Core Values are the heart of all what we do. They are integrated
          into our daily work lives and help us to remember
          <br />
          our customers always come first, the last thank you should always come
          from us.
        </p>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active mt-5">
              <div className="d-flex justify-content-around">
                <div className="card shadow" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src={rajnish}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      <b>Rajnish Singh</b> | Resident
                    </p>
                    <p>⭐⭐⭐⭐</p>
                    <hr />
                    <p className="card-text">
                      You'll get the best of what you require or want. Had a
                      great experience with such amazing service.
                    </p>
                  </div>
                </div>
                <div className="card shadow" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src={rajnish}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      <b>Rajnish Singh</b> | Resident
                    </p>
                    <p>⭐⭐⭐⭐</p>
                    <hr />
                    <p className="card-text">
                      You'll get the best of what you require or want. Had a
                      great experience with such amazing service.
                    </p>
                  </div>
                </div>
                <div className="card shadow" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src={rajnish}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      <b>Rajnish Singh</b> | Resident
                    </p>
                    <p>⭐⭐⭐⭐</p>
                    <hr />
                    <p className="card-text">
                      You'll get the best of what you require or want. Had a
                      great experience with such amazing service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active mt-5">
              <div className="d-flex justify-content-around">
                <div className="card shadow" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src={rajnish}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      <b>Rajnish Singh</b> | Resident
                    </p>
                    <p>⭐⭐⭐⭐</p>
                    <hr />
                    <p className="card-text">
                      You'll get the best of what you require or want. Had a
                      great experience with such amazing service.
                    </p>
                  </div>
                </div>
                <div className="card shadow" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src={rajnish}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      <b>Rajnish Singh</b> | Resident
                    </p>
                    <p>⭐⭐⭐⭐</p>
                    <hr />
                    <p className="card-text">
                      You'll get the best of what you require or want. Had a
                      great experience with such amazing service.
                    </p>
                  </div>
                </div>
                <div className="card shadow" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src={rajnish}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      <b>Rajnish Singh</b> | Resident
                    </p>
                    <p>⭐⭐⭐⭐</p>
                    <hr />
                    <p className="card-text">
                      You'll get the best of what you require or want. Had a
                      great experience with such amazing service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active mt-5">
              <div className="d-flex justify-content-around">
                <div className="card shadow" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src={rajnish}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      <b>Rajnish Singh</b> | Resident
                    </p>
                    <p>⭐⭐⭐⭐</p>
                    <hr />
                    <p className="card-text">
                      You'll get the best of what you require or want. Had a
                      great experience with such amazing service.
                    </p>
                  </div>
                </div>
                <div className="card shadow" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src={rajnish}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      <b>Rajnish Singh</b> | Resident
                    </p>
                    <p>⭐⭐⭐⭐</p>
                    <hr />
                    <p className="card-text">
                      You'll get the best of what you require or want. Had a
                      great experience with such amazing service.
                    </p>
                  </div>
                </div>
                <div className="card shadow" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src={rajnish}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      <b>Rajnish Singh</b> | Resident
                    </p>
                    <p>⭐⭐⭐⭐</p>
                    <hr />
                    <p className="card-text">
                      You'll get the best of what you require or want. Had a
                      great experience with such amazing service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev dark"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next dark"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <hr />
        <div className="text-center">
          <h2>Submit Feedback</h2>
          <FeedbackForm onSubmit={handleFeedbackSubmit} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Testimonials;

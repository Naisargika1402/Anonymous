import React from "react";
import Lottie from "react-lottie";
import emailjs from "emailjs-com"; // Import emailjs library
import contactAnimation from "../json files/contact-us.json";
import "../css files/ContactUs.css";

function ContactUs() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ktepc2v", // Service ID
        "template_3mr3b3s", // Template ID
        e.target, // Form data
        "MFf_I7thOqU1nMoKU" // User ID/Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          // You can add any success handling logic here
        },
        (error) => {
          console.log(error.text);
          // You can add any error handling logic here
        }
      );

    // Clear the form fields after submission if needed
    e.target.reset();
  };

  return (
    <div className="container-fluid">
      <div className="heading_container">
        <h2>Contact Us</h2>
      </div>
      <div className="row px-3 py-5">
        <div className="col-md-6 contact_section">
          <form onSubmit={sendEmail}>
            <div>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div>
              <input type="text" name="phone" placeholder="Phone Number" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
              <input
                type="text"
                name="message"
                className="message-box"
                placeholder="Message"
              />
            </div>
            <div className="d-flex">
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
        <div className="col-md-6 myimg">
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

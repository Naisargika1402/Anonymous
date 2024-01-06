import React from "react";
import Lottie from "react-lottie";
import contactAnimation from "../json files/contact-us.json"; // Adjust the path accordingly
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

  return (
    <div className="container-fluid">
      <div className="heading_container">
        <h2>Contact Us</h2>
      </div>
      <div className="row px-3 py-5">
        <div className="col-md-6 contact_section">
          <form action="#" method="post">
            <div>
              <input type="text" placeholder="Name" fdprocessedid="6gbrm" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                fdprocessedid="9ykr8n"
              />
            </div>
            <div>
              <input type="email" placeholder="Email" fdprocessedid="ifgt3c" />
            </div>
            <div>
              <input
                type="text"
                className="message-box"
                placeholder="Message"
                fdprocessedid="kedw1d"
              />
            </div>
            <div className="d-flex">
              <button fdprocessedid="leew5l">SEND</button>
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

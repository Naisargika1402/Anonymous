import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import {
  FaClock,
  FaCog,
  FaUser,
  FaShieldAlt,
  FaClipboardList,
  FaDollarSign,
} from "react-icons/fa";
import "../css files/ChooseUs.css";

const ChooseUs = () => {
  const [anmtn, setAnmtn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setAnmtn(true)}>
      <h2 style={{ textAlign: "center" }}>Why Choose Us</h2>
      {anmtn && (
        <div className="timeline">
          <div className="mycontnr left-cntr">
            <FaClock size={35} className="left-img" />
            <div className="txt-bx">
              <h3>Flexible Schedule</h3>
              <p>
                We understand that life can be busy. That's why we offer
                flexible scheduling options to accommodate your needs. Whether
                it's early morning or late evening, we've got you covered.
              </p>
              <span className="left-arrow"></span>
            </div>
          </div>
          <div className="mycontnr right-cntr">
            <FaCog size={35} className="right-img" />
            <div className="txt-bx">
              <h3>Multiple Options</h3>
              <p>
                Your satisfaction is our priority. We provide a variety of
                options to choose from, ensuring that you get the services that
                perfectly match your requirements. Your preferences matter to
                us.
              </p>
              <span className="right-arrow"></span>
            </div>
          </div>
          <div className="mycontnr left-cntr">
            <FaUser size={35} className="left-img" />
            <div className="txt-bx">
              <h3>Top Quality Service</h3>
              <p>
                Our commitment to delivering top-quality service is unwavering.
                Our skilled professionals are dedicated to exceeding your
                expectations, ensuring that you receive the best service every
                time.
              </p>
              <span className="left-arrow"></span>
            </div>
          </div>
          <div className="mycontnr right-cntr">
            <FaShieldAlt size={35} className="right-img" />
            <div className="txt-bx">
              <h3>Licensed Professional</h3>
              <p>
                Trust is the foundation of our service. Rest assured, our team
                consists of licensed professionals who are experienced and
                qualified to handle your needs. Your safety and satisfaction are
                our priorities.
              </p>
              <span className="right-arrow"></span>
            </div>
          </div>
          <div className="mycontnr left-cntr">
            <FaClipboardList size={35} className="left-img" />
            <div className="txt-bx">
              <h3>Monthly Service Subscriptions</h3>
              <p>
                Simplify your life with our monthly service subscriptions. Enjoy
                hassle-free, regular services tailored to your needs. Experience
                the convenience of consistent, reliable assistance every month.
              </p>
              <span className="left-arrow"></span>
            </div>
          </div>
          <div className="mycontnr right-cntr">
            <FaDollarSign size={35} className="right-img" />
            <div className="txt-bx">
              <h3>Best Price Packages</h3>
              <p>
                Quality doesn't have to break the bank. Explore our
                budget-friendly price packages designed to offer you the best
                value for your money. Affordable excellence is our commitment to
                you.
              </p>
              <span className="right-arrow"></span>
            </div>
          </div>
        </div>
      )}
    </ScrollTrigger>
  );
};

export default ChooseUs;

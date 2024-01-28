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
                Sem in eget faucibus massa arcu et elementum sed massa nulla
                dolor felis dictumst malesuada non.
              </p>
              <span className="left-arrow"></span>
            </div>
          </div>
          <div className="mycontnr right-cntr">
            <FaCog size={35} className="right-img" />
            <div className="txt-bx">
              <h3>Multiple Options</h3>
              <p>
                Sem in eget faucibus massa arcu et elementum sed massa nulla
                dolor felis dictumst malesuada non.
              </p>
              <span className="right-arrow"></span>
            </div>
          </div>
          <div className="mycontnr left-cntr">
            <FaUser size={35} className="left-img" />
            <div className="txt-bx">
              <h3>Top Quality Service</h3>
              <p>
                Sem in eget faucibus massa arcu et elementum sed massa nulla
                dolor felis dictumst malesuada non.
              </p>
              <span className="left-arrow"></span>
            </div>
          </div>
          <div className="mycontnr right-cntr">
            <FaShieldAlt size={35} className="right-img" />
            <div className="txt-bx">
              <h3>Licensed Professional</h3>
              <p>
                Sem in eget faucibus massa arcu et elementum sed massa nulla
                dolor felis dictumst malesuada non.
              </p>
              <span className="right-arrow"></span>
            </div>
          </div>
          <div className="mycontnr left-cntr">
            <FaClipboardList size={35} className="left-img" />
            <div className="txt-bx">
              <h3>Monthly Servies Subscriptions</h3>
              <p>
                Sem in eget faucibus massa arcu et elementum sed massa nulla
                dolor felis dictumst malesuada non.
              </p>
              <span className="left-arrow"></span>
            </div>
          </div>
          <div className="mycontnr right-cntr">
            <FaDollarSign size={35} className="right-img" />
            <div className="txt-bx">
              <h3>Best Price Packages</h3>
              <p>
                Sem in eget faucibus massa arcu et elementum sed massa nulla
                dolor felis dictumst malesuada non.
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

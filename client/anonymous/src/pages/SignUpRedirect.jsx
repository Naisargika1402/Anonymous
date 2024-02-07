import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaUser } from "react-icons/fa";
import "../css files/SignUpRedirect.css";
import Header from "../components/Header";

function SignUpRedirect() {
  const handleBoxClick = (role) => {
    // Handle the click based on the role (employee or customer)
    console.log(`Redirect to SignUp page for ${role}`);
  };

  return (
    <div>
      <Header />
      <div className="signup-container">
        <h1 className="signup-header">Hola, please select your role.</h1>
        <p className="signup-description">
          We'll personalize your setup experience accordingly.
        </p>
        <br />
        <br />
        <div>
          <Link
            to="/signup-employee"
            className="signup-box"
            onClick={() => handleBoxClick("employee")}
          >
            <FaUserTie
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            I'm here to provide services
          </Link>

          <Link
            to="/signup-user"
            className="signup-box"
            onClick={() => handleBoxClick("customer")}
          >
            <FaUser style={{ marginRight: "8px", verticalAlign: "middle" }} />
            I'm looking for services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpRedirect;

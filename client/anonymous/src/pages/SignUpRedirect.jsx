import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaUser } from "react-icons/fa";
import "../css files/SignUpRedirect.css";

function SignUpRedirect() {
  const handleBoxClick = (role) => {
    // Handle the click based on the role (employee or customer)
    console.log(`Redirect to SignUp page for ${role}`);
  };

  return (
    <div className="signup-container">
      <h1 className="signup-header">Hello, Please select your role.</h1>
      <p className="signup-description">
        We'll personalize your setup experience accordingly.
      </p>
      <br />
      <br />
      <div>
        <Link
          to="/register"
          className="signup-box"
          onClick={() => handleBoxClick("employee")}
        >
          <FaUserTie style={{ marginRight: "8px", verticalAlign: "middle" }} />
          I'm here to provide services
        </Link>

        <Link
          to="/register"
          className="signup-box"
          onClick={() => handleBoxClick("customer")}
        >
          <FaUser style={{ marginRight: "8px", verticalAlign: "middle" }} />
          I'm looking for services
        </Link>
      </div>
    </div>
  );
}

export default SignUpRedirect;
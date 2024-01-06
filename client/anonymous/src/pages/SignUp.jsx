import React from "react";
import "../css files/Login-SignUp.css";
import Login from "./Login";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="full-screen-container">
      <div className="login-container" id="loginContainer">
        <h1 className="login-title">Welcome</h1>
        <form className="form" id="signupForm">
          {/* Signup form content */}
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="input-group">
            <label htmlFor="signupEmail">Email</label>
            <input type="email" name="signupEmail" id="signupEmail" />
          </div>
          <div className="input-group">
            <label htmlFor="createPassword">Create Password</label>
            <input type="password" name="createPassword" id="createPassword" />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>

          <Link to={Login} className="login-message">
            Already have an account? Sign in
          </Link>

          {/*} <a href="login.html" className="login-message">
            Already have an account? Sign in
  </a>*/}
        </form>
      </div>
    </div>
  );
};

export default SignUp;

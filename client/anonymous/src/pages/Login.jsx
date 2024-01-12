import React from "react";
// import SignUp from "./SignUp";
import "../css files/Login-SignUp.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="full-screen-container">
      <div className="login-container" id="loginContainer">
        <h1 className="login-title">Welcome</h1>
        <form className="form" id="loginForm">
          <div className="input-group success">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <span className="msg">Enter frequently used email</span>
          </div>

          <div className="input-group error">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <span className="msg">Enter correct password</span>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          {/* Provide the actual component in the to prop */}
          {/*<Link to={SignUp} className="signup-message">
            Not already a user? Sign up here
  </Link>*/}

          <div>
            <p>
              <Link to="/signup" className="text-center">
                Not already a user? Sign up here.
              </Link>
            </p>
          </div>

          {/*<a href="signUp.jsx" className="signup-message">
            Not already a user? Sign up here
</a>*/}
        </form>
      </div>
    </div>
  );
};

export default Login;

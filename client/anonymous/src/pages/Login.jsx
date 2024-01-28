import React, { useState } from "react";
import "../css files/Login-SignUp.css";

import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result.data);
        if (result.data === "Success") {
          // Store the user's email in localStorage
          localStorage.setItem("loggedInUserEmail", email);
          navigate("/userpage");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="full-screen-container">
      <div className="login-container1" id="loginContainer">
        <h1 className="login-title">Login</h1>
        <form className="form" id="signupForm" onSubmit={handleSubmit}>
          {/* Signup form content */}

          <div className="input-group">
            <label htmlFor="signupEmail">Email</label>
            <input
              type="email"
              name="signupEmail"
              id="signupEmail"
              placeholder="Enter e-mail"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="createPassword">Enter Password</label>
            <input
              type="password"
              name="createPassword"
              id="createPassword"
              placeholder="Enter Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
          <p className="text-center my-3 text-white">
            Not Registered?&nbsp;
            <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

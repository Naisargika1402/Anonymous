import React, { useState } from "react";
import "../css files/Login-SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/login", {
        email,
        password,
        designation,
      })
      .then((result) => {
        console.log(result.data);
        if (result.data === "Success") {
          // Store the user's email and designation in localStorage
          localStorage.setItem("loggedInUserEmail", email);
          localStorage.setItem("loggedInUserDesignation", designation);

          // Redirect based on designation
          if (designation === "worker") {
            navigate("/workerpage");
          } else if (designation === "user") {
            navigate("/userpage");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="full-screen-container">
      <div className="login-container1" id="loginContainer">
        <h1 className="login-title">Login</h1>
        <hr className="text-white" />
        <form className="form" id="signupForm" onSubmit={handleSubmit}>
          {/* Login form content */}
          <div className="input-group">
            <label htmlFor="designation">Designation</label>
            <select
              name="designation"
              id="designation"
              onChange={(e) => setDesignation(e.target.value)}
              defaultValue="" // Use defaultValue instead of disabled selected
            >
              <option value="" disabled>
                Select Designation
              </option>
              <option value="user">User</option>
              <option value="worker">Worker</option>
            </select>
          </div>
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
          <button type="submit" className="login-button mt-2">
            Login
          </button>
          <p className="text-center my-2 text-white">
            Not Registered?&nbsp;
            <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

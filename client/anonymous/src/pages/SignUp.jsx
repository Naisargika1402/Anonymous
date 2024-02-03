import React, { useState } from "react";
import "../css files/Login-SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState(""); // Added
  const [gender, setGender] = useState(""); // Added
  const [address, setAddress] = useState(""); // Added
  const navigate = useNavigate();
  const [designation, setDesignation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!confirmPassword) {
      console.log("Please confirm your password");
      return;
    }

    axios
      .post("http://localhost:4000/register", {
        name,
        email,
        phoneNumber,
        age, // Added
        gender, // Added
        designation, // Added
        address, // Added
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="full-screen-container">
      <div className="login-container2" id="loginContainer">
        <h1 className="login-title">Sign Up</h1>
        <form className="form" id="signupForm" onSubmit={handleSubmit}>
          {/* Signup form content */}
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
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
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter phone number"
              autoComplete="off"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Enter Age"
              autoComplete="off"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="designation">Designation</label>
            <select
              name="designation"
              id="designation"
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value="" disabled selected>
                Select Designation
              </option>
              <option value="worker">Worker</option>
              <option value="user">User</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter Address"
              autoComplete="off"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="createPassword">Create Password</label>
            <input
              type="password"
              name="createPassword"
              id="createPassword"
              placeholder="Enter Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              autoComplete="off"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
          <p className="text-center my-2 text-white">
            Already a user?&nbsp;
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

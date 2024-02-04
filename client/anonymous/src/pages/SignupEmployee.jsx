import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css files/Login-SignUp.css";

const SignupEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [expertise, setExpertise] = useState("");
  const [skills, setSkills] = useState([]);
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();

  const expertiseOptions = [
    "Maintenance",
    "Electrical",
    "Plumbing",
    "Food Services",
    "Cleaning",
    "Grooming",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!confirmPassword) {
      console.log("Please confirm your password");
      return;
    }

    const userData = {
      name,
      email,
      phoneNumber,
      age,
      gender,
      designation: "Employee",
      address,
      password,
      confirmPassword,
      expertise,
      skills,
      experience,
    };

    axios
      .post("http://localhost:4000/signup-employee", userData)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="full-screen-container">
      <div className="login-container2" id="loginContainer">
        <h1 className="login-title">Employee SignUp</h1>
        <hr className="text-white" />
        <form className="form mt-3" id="signupForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              {/* Left column */}
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
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
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
            </div>
            <div className="col">
              {/* Right column */}
              <div className="input-group">
                <label htmlFor="expertise">Expertise</label>
                <select
                  name="expertise"
                  id="expertise"
                  onChange={(e) => setExpertise(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select Expertise
                  </option>
                  {expertiseOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="skills">List your Skills</label>
                <input
                  type="text"
                  name="skills"
                  id="skills"
                  placeholder="Enter Skills (comma separated)"
                  autoComplete="off"
                  onChange={(e) => setSkills(e.target.value.split(","))}
                />
              </div>
              <div className="input-group">
                <label htmlFor="experience">Experience (in years)</label>
                <input
                  type="number"
                  name="experience"
                  id="experience"
                  placeholder="Enter Experience"
                  autoComplete="off"
                  onChange={(e) => setExperience(e.target.value)}
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
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />

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

export default SignupEmployee;

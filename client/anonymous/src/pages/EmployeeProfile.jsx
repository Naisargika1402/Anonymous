import React, { useEffect, useRef, useState } from "react";
import UserHeader from "./UserHeader";
import Footer from "../components/Footer";
import axios from "axios";

function EmployeeProfile() {
  const [employeeDetails, setEmployeeDetails] = useState({});

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

        if (loggedInUserEmail) {
          const response = await axios.post(
            "http://localhost:4000/getEmployeeDetails",
            {
              designation: "Employee", // Adjust as needed based on your backend route
              expertise: "Maintenance", // Adjust as needed based on your backend route
            }
          );

          setEmployeeDetails(response.data);
        } else {
          console.log("Email id not available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployeeDetails();
  }, []);

  return (
    <>
      <UserHeader />
      <div className="container mt-5" style={{ maxWidth: "700px" }}>
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title text-center">Employee Profile</h2>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Employee ID:</span>{" "}
                {employeeDetails._id}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Full Name:</span>{" "}
                {employeeDetails.name}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Email:</span>{" "}
                {employeeDetails.email}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Phone Number:</span>{" "}
                {employeeDetails.phoneNumber}
              </li>
              {/* Add other employee details as needed */}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EmployeeProfile;

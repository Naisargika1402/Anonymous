import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkerHeader from "./EmployeeHeader";
import Footer from "../components/Footer";

function EmployeePage() {
  const [workerDetails, setWorkerDetails] = useState(null);

  useEffect(() => {
    // Fetch worker details based on email from localStorage
    const email = localStorage.getItem("loggedInUserEmail");

    axios
      .post("http://localhost:4000/getUserDetails", { email })
      .then((res) => {
        setWorkerDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!workerDetails) {
    return <div>Loading...</div>;
  }

  // Extract the first name from the full name
  const firstName = workerDetails.name ? workerDetails.name.split(" ")[0] : "";

  return (
    <>
      <WorkerHeader />
      <div className="container mt-5" style={{ maxWidth: "700px" }}>
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title text-center">
              Hey {firstName}, here are your details:
            </h2>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Employee ID:</span>{" "}
                {workerDetails._id}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Full Name:</span>{" "}
                {workerDetails.name}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Email:</span>{" "}
                {workerDetails.email}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Phone Number:</span>{" "}
                {workerDetails.phoneNumber}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Age:</span>{" "}
                {workerDetails.age}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Gender:</span>{" "}
                {workerDetails.gender}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Expertise:</span>{" "}
                {workerDetails.expertise}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Skills:</span>{" "}
                {workerDetails.skills && workerDetails.skills.length > 0
                  ? workerDetails.skills.join(", ")
                  : "No skills specified"}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Experience:</span>{" "}
                {workerDetails.experience} years
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Address:</span>{" "}
                {workerDetails.address}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EmployeePage;

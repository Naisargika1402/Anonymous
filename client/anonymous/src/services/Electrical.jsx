import React, { useEffect, useState } from "react";
import axios from "axios";

function Electrical() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user details
    axios
      .post("http://localhost:4000/electrical", {
        designation: "Employee",
        expertise: "Electrical",
      })
      .then((response) => {
        if (response.data !== "User not found") {
          setUserData(response.data);
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Details</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone Number: {userData.phoneNumber}</p>
          <p>Age: {userData.age}</p>
          <p>Gender: {userData.gender}</p>
          <p>Skills: {userData.skills.join(", ")}</p>
          <p>Address: {userData.address}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Electrical;

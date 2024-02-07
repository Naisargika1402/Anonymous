import React, { useEffect, useState } from "react";
import axios from "axios";

function FoodServices() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user details
    axios
      .post("http://localhost:4000/food", {
        designation: "Employee",
        expertise: "Food Services",
      })
      .then((response) => {
        if (response.data !== "No users found") {
          setUserData(response.data);
        } else {
          console.log("No users found");
        }
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, []);

  return (
    <div>
      {userData.length > 0 ? (
        <div>
          <h2>User Details</h2>
          {userData.map((user, index) => (
            <div key={index}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phoneNumber}</p>
              <p>Age: {user.age}</p>
              <p>Gender: {user.gender}</p>
              <p>
                Skills:{" "}
                {Array.isArray(user.skills)
                  ? user.skills.join(", ")
                  : user.skills}
              </p>
              <p>Address: {user.address}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FoodServices;

const express = require("express");
const router = express.Router();
const userModel = require("../models/users");

// Route for user login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

// Route for user signup
router.post("/signup-user", (req, res) => {
  console.log(req.body);
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Route for employee signup
router.post("/signup-employee", (req, res) => {
  console.log(req.body);
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Route to fetch user details by email
router.post("/getUserDetails", (req, res) => {
  const { email } = req.body;
  userModel
    .findOne({ email: email })
    .select("-password -confirmPassword") // exclude password and confirmPassword
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.json("User not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Internal Server Error");
    });
});

// Define routes for different services dynamically
const services = [
  "maintenance",
  "cleaning",
  "electrical",
  "food",
  "grooming",
  "plumbing",
];

services.forEach((service) => {
  router.post(`/${service}`, (req, res) => {
    const { designation, expertise } = req.body;
    userModel
      .find({ designation, expertise }) // Use .find() to retrieve all entries
      .select("-password -confirmPassword") // exclude password and confirmPassword
      .then((users) => {
        if (users && users.length > 0) {
          res.json(users);
        } else {
          res.json("No users found");
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json("Internal Server Error");
      });
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const userModel = require("../models/users");

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

router.post("/signup-user", (req, res) => {
  console.log(req.body);
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

router.post("/signup-employee", (req, res) => {
  console.log(req.body);
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Add a new route to fetch user details by email
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

router.post("/maintenance", (req, res) => {
  const { designation, expertise } = req.body;
  userModel
    .findOne({ designation, expertise })
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

router.post("/cleaning", (req, res) => {
  const { designation, expertise } = req.body;
  userModel
    .findOne({ designation, expertise })
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

router.post("/electrical", (req, res) => {
  const { designation, expertise } = req.body;
  userModel
    .findOne({ designation, expertise })
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

router.post("/food", (req, res) => {
  const { designation, expertise } = req.body;
  userModel
    .findOne({ designation, expertise })
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

router.post("/grooming", (req, res) => {
  const { designation, expertise } = req.body;
  userModel
    .findOne({ designation, expertise })
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

router.post("/plumbing", (req, res) => {
  const { designation, expertise } = req.body;
  userModel
    .findOne({ designation, expertise })
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
module.exports = router;

const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://localhost:27017/test-login`)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log("no connection");
  });

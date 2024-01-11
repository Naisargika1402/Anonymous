const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri =
      "mongodb+srv://b421037:05SHhlMglWqPfJR1@rajnishcluster01.ofhycom.mongodb.net/anonymous?retryWrites=true&w=majority";
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

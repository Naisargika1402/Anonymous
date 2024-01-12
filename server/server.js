// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB Atlas
connectDB();

app.use(express.json());
app.use(cors());

// Use feedback routes
app.use("/api/feedback", feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

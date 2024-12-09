const express = require('express');
const App = express();
require("dotenv").config();

// Middleware
App.use(express.json());

// Environment variables
const PORT = process.env.PORT || 4000;

// Import routes
const blog = require("./routes/blog");

// Mount routes
App.use("/api/v1", blog);

// Connect database
const dbconnect = require("./config/database");
dbconnect();

// Start server
App.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});

// Home route
App.get("/", (req, res) => {
    res.send("This is my home page");
});

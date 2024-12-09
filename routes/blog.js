//import express
const express = require('express');
const router = express.Router();

// Import handler
const { dummylink } = require("../controller/likecontroller");

// Define route
router.get('/dummylink', dummylink); // Assuming this is a GET request

// Export the router
module.exports = router;

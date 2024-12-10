//import express
const express = require('express');
const router = express.Router();

// Import handler
const { dummylink , likepost, unlikepost } = require("../controller/likecontroller");
const { commenthandler } = require("../controller/commentcontroller");
const {posthandler, getallpost} = require("../controller/postcontroller");
// Define route
router.get('/dummyroute', dummylink); 
router.post('/comment/create', commenthandler );
router.post("/posts/create",   )
router.post("/likes/like", likepost );
router.post("/likes/unlike", unlikepost);




// Export the router
module.exports = router;

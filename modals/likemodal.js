

//import mongoose
const mongoose = require("mongoose");

//route handler
const likeschema = new mongoose.Schema({

    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "post", //refrence to the post model
    },

    user:{
        type: String,
        required: true,

    },

    
})
//export
module.exports = mongoose.model("Like", likeschema);


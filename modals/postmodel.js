//import mongoose
const mongoose = require("mongoose");

//route handler
const postschema = new mongoose.Schema({

    title:{
        type:String,
        required: true,
    },

    
    body:{
        type:String,
        required: true,
    },

    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Like", //refrence to the post model
    }],

    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Comment", //refrence to the post model
    }],
})
//export
module.exports = mongoose.model("post", postschema);
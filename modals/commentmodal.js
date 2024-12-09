// //import mongoose
// const mongoose = require("mongoose");

// //route handler
// const commentschema = new mongoose.Schema({

//     post:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref: "post",
//     },

//     user:{
//         type: String,
//         required: true,

//     },

//     body:{

//         type: String,
//         required:true,

//     }
// })
// //export
// module.exports = mongoose.model("Comment", commentschema);

const mongoose = require("mongoose");

// Schema for comments
const commentschema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // Reference to the Post model (case-sensitive)
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
});

// Export the Comment model
module.exports = mongoose.model("Comment", commentschema);

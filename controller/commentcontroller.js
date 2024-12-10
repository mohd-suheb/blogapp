//import model
const post = require("../modals/postmodel");
const Comment = require("../modals/commentmodal");

//create commnet handler
exports.commenthandler = async(req, res)=>{

    try{
        //  fetch the data from req body
        const {body, user, post} = req.body;
        //create comment object
        const comment = new Comment({
            body, user, post
        });
        //save the new comment into the database
        const savedcomment = await comment.save();
        //find post by id add new comments to its comments array

    const updatedpost = await post.findByIdAndUpdate(post, {$push:{comments: savedcomment._id} }, {new:true})
                        .populate("comments") //populate the comments aray with comment documents
                        .exec();

                        res.json({
                            post:updatedpost,
                        })
     
    }
    catch(err){

        return res.status(500).json({
            err: "err while creating the object",
            
        })

    }
}

const post = require("../modals/postmodel");
const Like = require("../modals/likemodal");

//creat like post
exports.likepost = async(req, res)=>{

      try{
            const {post, user} = req.body;

            const postobj =  new Like({
                  post, user,
            });

            const savedlike = await Like.save();

            const updatedpost = await post.findByIdAndUpdate(post, {$push: {likes: savedlike.id}}, {new:true})
                                 .populate("likes").exec();

                                 res.json({
                                    post:updatedpost,
                                 })

      }
      catch(error){

            return res.status(401).json({

                  error: "error while like the object"
            });

      }
}

//unlike post

exports.unlikepost = async(req, res)=>{

      try{
       const{post, Like} = req.body;

       //find and delete like collection me se
       const deletedlike = await Like.findOneAndDelete({post:post._id,like});
       //update the post collection
       const updatedpost = await post.findByIdAndDelete(post, {$pull:{likes: deletedlike.id}}, {new:true});

       res.json({
            post:updatedpost,
       })
      }
      catch(error){

            return res.status(401).json({

                  error: "error while unlike the object"
            });

      }
}

exports.dummylink  = (req, res)=>{

      res.send("i am happy");
}
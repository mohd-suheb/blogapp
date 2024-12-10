const post = require("../modals/postmodel");

const posthandler = async(req, res)=>{

    try{

        //fetch data from data from req body
        const{title, body} = req.body;
        //creat post object

        const postobjt = new post({
            title, body
        });

       const savedpost = await  post.save();

       //return response
       res.json({
        post:savedpost
       });

    }
    catch(error){
        return res.status(500).json({
            error: "while creating the object",
        });

    }
}

//get all posts

exports.getallposts = async(req, res) =>{

    try{
        //find all the post

        const posts = await post.find().populate("comments").exec();

        //ret res
        res.json({
            posts,
        })

    }
    catch(error){
        
        return res.status(500).json({
            error: "while creating the object",
        });
    }
}
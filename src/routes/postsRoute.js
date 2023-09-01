const {Router} = require("express");
const { createPost } = require("../models/controllers");

const postsRouter = Router();

postsRouter.post("/",(req,res)=>{
    try {
        const {title, contents , userId} = req.body;
        if(!title, !contents , !userId) throw new Error("Missing info")
    
        const newPost = createPost(title, contents , userId);
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json(error.message);
    }

});

module.exports= postsRouter;
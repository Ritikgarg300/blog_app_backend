
const express =require('express');
const routes=express.Router();

const {createPost,getAllPosts} =require('../Controller/PostController')
const {createComment}=require('../Controller/CommentController');
const {createLike,unlikedPost } =require('../Controller/likesController')
routes.post("/comment/create",createComment);
routes.post("/post/create",createPost)
routes.post("/post/like",createLike)
routes.post("/post/unlike",unlikedPost)
routes.get("/posts",getAllPosts)
module.exports=routes;
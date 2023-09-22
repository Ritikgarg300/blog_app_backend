
const Post =require('../Models/postModel')
const Comment=require('../Models/commentModel')

exports.createComment= async(req,res)=>{
    try{
        const {post,user,body}=req.body;
        const comment =new Comment({
            post,user,body
        });
        const savedComment =await comment.save();
      const updatePost =await Post.findByIdAndUpdate(post,{$push :{comment:savedComment._id}},{new:true})
    .populate("comment").exec();
    res.json({
        post:updatePost,
    })
    }
    catch(error){
         return res.status(500).json({
            error:"error while creating comment",
         })
    }
}
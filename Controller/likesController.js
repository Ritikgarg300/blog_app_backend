
const Post =require('../Models/postModel')
const Like=require('../Models/likeModel')

exports.createLike= async(req,res)=>{
    try{
        const {post,user}=req.body;
        const like =new Like({
            post,user
        });
        const savedLike =await like.save();
      const updatePost =await Post.findByIdAndUpdate(post,{$push :{likes:savedLike._id}},{new:true}).populate("likes")
    
    res.json({
        post:updatePost,
    })
    }
    catch(error){
         return res.status(500).json({
            error:"error while  like",
         })
    }
}

exports.unlikedPost =async (req,res)=>{
  try{
    //id h in dono m
     const{post,like}=req.body
     const deleteLike= await Like.findOneAndDelete({post:post,_id:like});
     const updatePost=await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true})
     res.json({
        post:updatePost,
    })
    }
  catch(error){
    return res.status(500).json({
       error:"error while  unlike",
    })
}
}
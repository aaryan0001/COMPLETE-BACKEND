const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    image:String,
    caption:String,
})

const postModel=mongoose.model("post",postSchema);
//post ke collection me postSchema ke according data store hoga
//crud operations ke liye model ka use karenge
/*
post={
iamge:String,
caption:String
user={
name:String,
email:String,
caption:String,
post;[post1,post2,post3]}
*/
module.exports=postModel;
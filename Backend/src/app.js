const express=require('express');
const app=express();
const multer=require('multer');
const uploadFile=require('./services/storage.service');
const postModel=require('./models/post.models');
const cors=require('cors');
app.use(cors());//middleware jo allow karega cross origin requests ko

app.use(express.json());//middleware jo read karega req.body ko e=raw dataa me kam ayega

const upload=multer({storage:multer.memoryStorage()})
//photos me multer use hota hai

//jis name se bhej rhe honge file ko udar se hi single me use krnge "image"
app.post('/create-post', upload.single("image"), async(req,res)=>{
    console.log(req.body);
    console.log(req.file);


    const result=await uploadFile(req.file.buffer);
    // res.json(result);
    // console.log(result);
    const post= await postModel.create({
        image:result.url,
        caption:req.body.caption,
    })
    return res.status(201).json({
        message:"Post created successfully",post
    })
})

app.get("/posts" , async(req,res)=>{
    const posts=await postModel.find()
    return res.status(200).json({
        message:"All posts fetched successfully",posts
    })
})

//buffer hi actual file hota hai jo image ke liye use hota hai
module.exports=app;
 
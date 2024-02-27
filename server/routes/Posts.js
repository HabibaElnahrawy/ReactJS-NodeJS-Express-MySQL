const express=require('express')
const router =express.Router()
const {Posts}=require('../models')


router.get('/',async(request,response)=>{
    const listOfPosts=await Posts.findAll()
    response.json(listOfPosts)
});

router.post("/",async(req,res)=>{
    const post=req.body;
    await Posts.create(post);//insert into our table "Posts"
    res.json(post);//return as a reponse from this api request data
})
module.exports=router
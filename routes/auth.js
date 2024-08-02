const express=require("express")
const router=express.Router();
const User=require("../models/User");
const bcrpyt=require("bcryptjs")

const generateRandomAvatar=()=>{
    const randomAvatar=Math.floor(Math.random()*71);
    return `https://i.pravatar.cc/300?img=${randomAvatar}`
}
const defaultAvatar=generateRandomAvatar();
router.post("/register",async (req,res)=>{
    try{
    const {username,email,password}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser){
       return res.status(400).json({error:"Email address is already registered"});
    }
    const hashedPassword=await bcrpyt.hash(password,10);
    const newUser=new User({
        username,
        email,
        password:hashedPassword,
        avatar:defaultAvatar,
    });
    await newUser.save();

    res.status(201).json(newUser);
    }
    catch(err){
        console.log(err);
    }
})
router.post("/login",async (req,res)=>{
    try{
      const {email,password}=req.body;
      const user=await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"Invalid email or password."})
      }
      const isPasswordValid= await bcrpyt.compare(password,user.password);

    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;
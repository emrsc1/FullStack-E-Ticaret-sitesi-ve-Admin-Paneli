const express=require("express")
const router=express.Router();
const Coupon=require("../models/Coupon");


router.post("/",async (req,res)=>{
    try{
       const {code}=req.body;
       const existingCoupon=await Coupon.findOne({code});
       if(existingCoupon){
        return res.status(400).json({error:"The coupon already exists"});
       }
       const newCoupon=new Coupon(req.body);
       await newCoupon.save();

       res.status(200).json(newCoupon);
    }
    catch(err){
        console.log(err);
    }
})
router.get("/",async (req,res)=>{
    try{
        const coupons=await Coupon.find();
        res.status(200).json(coupons);
    }
    catch(err){
        console.log(err);
    }
})
router.get("/:couponId",async (req,res)=>{
    try{
         const couponId=req.params.couponId;
         const coupon=await Coupon.findById(couponId);

         res.status(200).json(coupon);
    }
    catch(err){
        console.log(err);
    }
})
router.get("/code/:couponCode",async (req,res)=>{
    try{
         const couponCode=req.params.couponCode;
         const coupon=await Coupon.findById(couponCode);

         res.status(200).json(coupon);
    }
    catch(err){
        console.log(err);
    }
})

router.put("/:couponId",async (req,res)=>{
    try{
       const couponId=req.params.couponId;
       const updates=req.body;
       const existingCoupon=await Coupon.findById(couponId);
       if(existingCoupon){
        return res.status(400).json({error:"The coupon already exists"})
       }
       const updatedCoupon=await Coupon.findByIdAndUpdate(couponId,
        updates,
        {new:true}
       )
        res.status(200).json(updatedCoupon);
    }
    catch(err){
        console.log(err);
    }
})
router.delete("/:couponId",async (req,res)=>{
    try{
       const couponId=req.params.couponId;
       const deletedCoupon=await Coupon.findByIdAndRemove(couponId);
       if(!deletedCoupon){
        return res.status(400).json({error:"Coupon not found"});
       }
       res.status(200).json(deletedCoupon);
    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;
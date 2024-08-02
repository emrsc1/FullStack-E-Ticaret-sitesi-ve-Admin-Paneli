const express=require("express")
const router=express.Router();
const Product=require('../models/Product');

router.post("/",async (req,res)=>{
    try{
       const newProduct=new Product(req.body);
       await newProduct.save();

       res.status(200).json(newProduct);

    }
    catch(err){
        console.log(err);
    }
})
router.get("/",async (req,res)=>{
    try{
        const products=await Product.find();
    }
    catch(err){
        console.log(err);
    }
})

router.get("/:productId",async (req,res)=>{
    try{ 
        const productId=req.params.categoryId;

        const product=await Product.findById(productId);

        res.status(200).json(product);
    }
    catch(err){
        console.log(err);
    }
});
router.put("/productId",async (req,res)=>{
    try{
        const productId=req.params.categoryId;
        const updates=req.body;

        const existingProduct=await Product.find(productId);
        if(!existingProduct){
            return res.status(400).json(error,"Product not found");
        }
        const updatedProduct=await Product.findByIdAndUpdate(
            productId,
            updates,
            {new:true}
        )
        res.status(200).json(updatedProduct);
    }
    catch(err){
        console.log(err);
    }
})
router.delete("/:productId",async (req,res)=>{
    try{
         const productId=req.body.productId;
         const deletedProduct=await Product.findByIdAndRemove(productId);
         if(!deletedProduct){
            return res.status(400).json(error,"Product not found");
         }
    }
    catch(err){
        console.log(err);
    }
})
module.exports=router;
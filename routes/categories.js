const express=require("express")
const router=express.Router();
const Category=require("../models/Category");

router.post("/",async (req,res)=>{
    try{
        const {name,img}=req.body;
        const newCategory= new Category({name,img});
        await newCategory.save();

        res.status(201).json(newCategory);
    }
    catch(err){
        console.log(err);
    }
})

router.get("/",async (req,res)=>{
    try{
       const categories =await Category.find();
       res.status(200).json(categories);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Kategoriler getirilemedi"});
    }
})
router.get("/:id",async (req,res)=>{
    try{
        const categoryId=req.params.categoryId;
        const category=await Category.findById(categoryId);
        res.status(200).json(category);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Kategori getirilemedi"});
    }
})
router.put("/:categoryId",async (req,res)=>{
    try{
       const categoryId=req.params.categoryId;
       const updates =req.body;
      
      const updatedCategory= await Category.findByIdAndUpdate(categoryId,updates,{new:true});
    }
    catch(err){
        console.log(err);
    }
})
router.delete("/:categoryId",async (req,res)=>{
    try{
       const categoryId=req.params.categoryId;

       const deletedCategory=await Category.findByIdAndDelete(categoryId);
       if(!deletedCategory){
            return  res.status(404).json({error:"Kategori bulunamadı"});
       }
    } 
    catch(err){
        console.log(err);
    }
})
module.exports=router;

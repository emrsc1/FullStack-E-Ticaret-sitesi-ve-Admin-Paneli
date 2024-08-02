const express=require("express")
const router=express.Router();

const productRoute=require("./products");
const categoryRoute=require("./categories");
const authRoute=require("./auth");
const couponRoute=require("./coupons");

router.use("/products",productRoute);
router.use("/categories",categoryRoute);
router.use("/users",authRoute);
router.use("/coupons",couponRoute);

module.exports=router;
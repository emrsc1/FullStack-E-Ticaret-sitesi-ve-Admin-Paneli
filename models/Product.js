const mongoose=require("mongoose");

const reviewsSchema=mongoose.Schema(
    {
        text:{type:String,required:true},
        rating:{type:Number},
        user:
           {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
           },
    }
)

const productSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        img:[{type:String,required:true}],
        reviews:[reviewsSchema],
        description:{type:String,required:true},
        colors:[{type:String,required:true}],
        sizes:[{type:String,required:true}],
        price:{
            current:{type:Number,required:true},
            discount:{type:Number}
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required:true
        }

    },
    {Timestamps:true}
)
const Product=mongoose.model("Product",productSchema);
module.exports=Product;
const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv")

const mainRoute=require("./routes/index");
const app=express();
const logger=require("morgan");
dotenv.config();



const connect =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB bağlantısı başarılı");
    }
    catch(err){
        console.log(err);
    }
}
app.use(logger("dev"));
app.use(express.json());
app.use("/api",mainRoute) 
const port=5173;
app.listen(port,()=>{
  connect();
  console.log(`Sunucu ${port} portunda çalışıyor`);
})
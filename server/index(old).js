const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()

mongoose.connect("mongodb+srv://pathaksoham2003:IphoneYoutube@cluster0.16f8znq.mongodb.net/firebase?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log(err);
})

const userSchema = new mongoose.Schema({
    id:{type:String},
    about:{type:String,default:''}
})
 
const User = mongoose.model("User",userSchema)

app.use(cors())
app.use(express.json())

app.post("/",async(req,res)=>{
    console.log(req.body.key)
    const {key} = req.body
   await  User.create({
        id:key
        ,about:''
    })
})
app.post("/about",async (req,res)=>{
    const {id,about} = req.body;
   const user = await User.updateOne({id:id},{about:about})
   console.log(user)
})

app.listen(3000,(req,res)=>{
    console.log("Server is running")
})
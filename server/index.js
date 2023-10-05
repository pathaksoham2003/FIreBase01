const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()

mongoose.connect("mongodb+srv://pathaksoham2003:IphoneYoutube@cluster0.16f8znq.mongodb.net/firebase?retryWrites=true&w=majority")

const userSchema = new mongoose.Schema({
    id:{type:String},
    email:{type:String},
    name:{type:String},
})
 
const User = mongoose.model("User",userSchema)

app.use(cors())
app.use(express.json())

app.post("/user",async(req,res)=>{
        const {id,email,name} = req.body;
        await User.create({
            id:id,
            email:email,
            name:name
        })
        res.status(200).json({success:true})
})

app.listen(3000,(req,res)=>{
    console.log("Server is running")
})
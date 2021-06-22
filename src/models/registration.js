const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const Register=new mongoose.model("Register",userschema)

module.exports=Register;
const {readFileSync}=require('fs')
const express=require('express')
require('./db/conn') 
const Register=require('./models/registration');
const path=require('path');
const hbs=require('hbs');
const { Mongoose, Schema } = require('mongoose');
const app=express();
const port=process.env.PORT || 3000;
const stylepath=path.join(__dirname,"imp","styles.css")

const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))

app.set("view engine",'hbs');
app.set("views",template_path);
hbs.registerPartials(partials_path)
hbs.registerPartials(template_path)


app.get('/index',(req,res)=>{
    res.render("index")
})

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/registration',(req,res)=>{
    res.render("login")
})

app.post('/registration',async(req,res)=>{
    try{
      const password=req.body.password;
      const cpass=req.body.conpassword;

      if(password==cpass){
         const user=new Register({
             username:req.body.username,
             password:req.body.password,
             conpassword:req.body.conpassword,
             email:req.body.email
         })
         const registered=await user.save()
         res.status(201).render("index");
      }
      else
      {
          res.send("password are not matching")
      }
    }
    catch(error){
        res.status(400).send(error)
    }
})

app.get('/login',(req,res)=>{
    res.render("login")
})

app.post('/login',async(req,res)=>{
   try {
       const user=req.body.eu;
       const password=req.body.ep;

     const username= await Register.findOne({username:user})
     if(password==username.password){
         res.status(201).render('index')
         
     }
     else{
         res.send("invalid login details")
     }
   } catch (error) {
      res.status(400).send("invalid login details")
   }
})

    app.listen(port,()=>{
        console.log('server is running')
    })
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/loginessential',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connection to database successful")
}).catch((e)=>{
    console.log('no connection')
})
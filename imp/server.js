console.log("Express tutorial")
const {readFileSync, read}=require('fs');
const homepage=readFileSync("./index.html","utf-8")
const homestyles=readFileSync("./styles.css","utf-8")
const homejs=readFileSync("./main.js")
const homeimg=readFileSync("./img/524.png")
const homelogin=readFileSync("./login/index.html")
const loginstyles=readFileSync("./login/style.css")
const loginmain=readFileSync("./login/app.js")
const logsvg=readFileSync("./login/img/log.svg")
const registersvg=readFileSync("./login/img/register.svg")

const http=require('http');

const server=http.createServer((req,res)=>{
   console.log("user hit server")
   //console.log(req.method)
   //console.log(req.url)

   if(req.url=='/'){

    res.writeHead(200,{'content-type':'text/html'})
        //provide info about content type.
   res.write(homepage)
   res.end()}

   else if(req.url=='/styles.css'){
    res.writeHead(200,{'content-type':'text/css'})
    //provide info about content type.
    res.write(homestyles)
       res.end()
    }
    else if(req.url=='/img/524.png'){
        res.writeHead(200,{'content-type':'img/png'})
        res.write(homeimg)
        res.end()
    }
    else if(req.url=='/main.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homejs)
        res.end()
    }
    else if(req.url=='/login/index.html'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homelogin)
        res.end()
    }
    else if(req.url=='/login/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(loginstyles)
        res.end()
    }
    else if(req.url=='/login/app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(loginmain)
        res.end()
    }
    else if(req.url=='/login/img/log.svg'){
        res.writeHead(200,{'content-type':'img/svg'})
        res.write(logsvg)
        res.end()
    }
    else if(req.url=='/login/img/register.svg'){
        res.writeHead(200,{'content-type':'img/svg'})
        res.write(registersvg)
        res.end()
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.write("<h1>page not found</h1>")
        res.end()
    }
})

server.listen(3000);
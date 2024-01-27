const http = require("http");
const fs = require("fs")
const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === "/"){
        res.setHeader('Content-Type','text/html')
        let html = fs.readFileSync("UI/index.html")
        res.end(html)
    }else if(req.url === "/styles.css"){
        res.setHeader('Content-Type','text/css')
        let ok = fs.readFileSync('UI/'+req.url);
        res.end(ok.toString())
    }
})

server.listen(5000)
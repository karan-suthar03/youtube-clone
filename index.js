const express = require("express")
const path  = require("path")
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"UI/index.html"))
})
app.listen(5000)
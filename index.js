const express = require("express")
const path  = require("path")
const icons  = require("./UI/icons/icons")
const fs = require("fs")
const videosthumbs = require("./UI/videosthumbs/videosthumbs")
const data = require("./data/data")
const app = express()
app.use('/icons',icons);
app.use('/videosthumbs',videosthumbs);

app.get("/data/data",(req,res)=>{
    let data = fs.readFileSync("data/Vdetails.data.json")
    res.json(JSON.parse(data.toString()));
})
app.use("/data",data);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"UI/index.html"));
})
app.get('/:id',(req,res)=>{
    res.sendFile(path.join(__dirname,"UI/"+req.params.id))
})
app.listen(5000)
const express = require("express")
const path  = require("path")
const icons  = require("./UI/icons/icons")
const videosthumbs = require("./UI/videosthumbs/videosthumbs")
const app = express()
app.use('/icons',icons)
app.use('/videosthumbs',videosthumbs)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"UI/index.html"));
})
app.get('/:id',(req,res)=>{
    res.sendFile(path.join(__dirname,"UI/"+req.params.id))
})
app.listen(5000)
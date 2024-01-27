const express = require("express")
const app = express();

app.get("/:id",(req,res)=>{
    console.log(req.id)
})
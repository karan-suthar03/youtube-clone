const express = require('express');
const fs = require('fs');
const router = express.Router();
let VDetails = fs.readFileSync(__dirname+ "/discription and likes.json");
VDetails = JSON.parse(VDetails.toString())
router.get('/thumbnails/:id', (req, res) => {
    const id = req.params.id;
    res.sendFile(__dirname + '/thumbnails/' + id);
})
router.get('/channelthumb/:id', (req, res) => {
    const id = req.params.id;
    res.sendFile(__dirname + '/channelthumb/' + id);
})
router.get('/videos/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.sendFile(__dirname + '/videos/' + id);
})

router.get('/VDetails/:id', (req, res) => {
    let id = req.params.id;
    res.json(VDetails.data[id])
})
module.exports = router;
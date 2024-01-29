const express = require('express');
const router = express.Router();
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
module.exports = router;
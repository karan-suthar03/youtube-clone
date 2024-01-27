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
module.exports = router;
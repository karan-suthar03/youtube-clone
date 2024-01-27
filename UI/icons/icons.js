const express = require("express");
const router = express.Router();
const path = require("path")
router.get("/normal/:id",(req, res) => {
    res.sendFile(path.join(__dirname,"normal/"+req.params.id));
})
router.get("/active/:id",(req, res) => {
    res.sendFile(path.join(__dirname,"active/"+req.params.id));
})
router.get("/:id", (req, res) => {
    res.sendFile(path.join(__dirname,req.params.id));
});

module.exports = router;

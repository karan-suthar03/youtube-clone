const express = require('express');
const path = require("path");
const router = express.Router();

router.use(express.static(__dirname, { dotfiles: 'allow' }));
module.exports = router;
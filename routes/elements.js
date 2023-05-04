let { createLamp, updateLamp, deleteLamp, getLamp } = require("../controllers/lampControllers.js")
const express = require('express')
const router = express.Router();
router.post('/lamp/create', createLamp)
router.post('/lamp/update', updateLamp)
router.post('/lamp/delete', deleteLamp)
router.post('/lamp/get', getLamp)
module.exports = router
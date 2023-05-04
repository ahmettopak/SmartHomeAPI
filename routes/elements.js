let { create, update, deleteElement } = require("../controllers/lampControllers.js")
const express = require('express')
const router = express.Router();
router.post('/create', create)
router.post('/update', update)
router.post('/delete', deleteElement)
module.exports = router
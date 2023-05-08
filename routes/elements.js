let { createLamp, updateLamp, deleteLamp, getLamp } = require("../controllers/lampControllers.js")
let { createSensor, updateSensor, deleteSensor, getSensor } = require("../controllers/sensorControllers.js")
const express = require('express')
const router = express.Router();

//Lamp router
router.post('/lamp/create', createLamp)
router.post('/lamp/update', updateLamp)
router.post('/lamp/delete', deleteLamp)
router.get('/lamp/get', getLamp)

//Sensor router
router.post('/sensor/create', createSensor)
router.post('/sensor/update', updateSensor)
router.post('/sensor/delete', deleteSensor)
router.get('/sensor/get', getSensor)

module.exports = router
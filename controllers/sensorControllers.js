const sensorScehema = require('../models/sensorSchema.js')
const jwt = require('jsonwebtoken')

const createSensor = async (req, res) => {
    try {
        const { name, value } = req.body
        const element = await sensorScehema.findOne({ name })

        if (element) {
            return res.status(500).json({ message: "Bu Sensor zaten bulunmakta !!" })
        }

        const newElement = await sensorScehema.create({ name, value })
        const token = await jwt.sign({ id: newElement.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
        res.status(200).json({
            status: "OK",
            newElement,
            token
        })
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateSensor = async (req, res) => {
    try {
        const { name, value } = req.body;

        const element = await sensorScehema.findOne({ name });

        if (!element) {
            return res.status(500).json({ message: "Böyle bir Sensor bulunamadı..." })
        }
        const filter = { name: name };
        const updateElm = { value: value };
        const doc = await sensorScehema.findOneAndUpdate(filter, updateElm, {
            new: true
        });

        const token = jwt.sign({ id: doc.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' })
        res.status(200).json({
            doc,
            token
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteSensor = async (req, res) => {
    try {
        const { name } = req.body;
        const element = await sensorScehema.findOne({ name });
        if (!element) {
            return res.status(500).json({ message: "Böyle bir Sensor bulunamadı..." })
        }
        await element.deleteOne({ name })
        const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' })
        res.status(200).json(
            status = "OK",
            newElement,
            token
        )
    } catch (error) {
        //return res.status(500).json({ message: error.message })
        const { name } = req.body;
        const element = await sensorScehema.findOne({ name });
        if (!element) {
            return res.status(500).json({ message: "Başarı ile silindi" })
        }
    }
}



const getSensor = async (req, res) => {
    try {
        const element = await sensorScehema.find().select("name value");

        if (!element) {
            return res.status(500).json({ message: "Böyle bir Sensor bulunamadı..." })
        }

        res.status(200).json(
            element
        )
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = { createSensor, updateSensor, deleteSensor, getSensor }
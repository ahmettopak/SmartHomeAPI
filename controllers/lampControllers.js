const lampSchema = require('../models/lampSchema.js')
const jwt = require('jsonwebtoken')

const create = async (req, res) => {
    try {
        const { name, status } = req.body
        const element = await lampSchema.findOne({ name })

        if (element) {
            return res.status(500).json({ message: "Bu lamba zaten bulunmakta !!" })
        }

        const newElement = await lampSchema.create({ name, status })
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

let update = async (req, res) => {
    try {
        const { name, status } = req.body;

        const element = await lampSchema.findOne({ name });

        if (!element) {
            return res.status(500).json({ message: "Böyle bir lamba bulunamadı..." })
        }
        const filter = { name: name };
        const updateElm = { status: status };
        const doc = await lampSchema.findOneAndUpdate(filter, updateElm, {
            new: true
        });

        const token = jwt.sign({ id: doc.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' })
        res.status(200).json(
            doc.status
        )
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteElement = async (req, res) => {
    try {
        const { name } = req.body;
        const element = await lampSchema.findOne({ name });
        if (!element) {
            return res.status(500).json({ message: "Böyle bir lamba bulunamadı..." })
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
        const element = await lampSchema.findOne({ name });
        if (!element) {
            return res.status(500).json({ message: "Başarı ile silindi" })
        }
    }
}




module.exports = { create, update, deleteElement }
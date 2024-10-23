const express = require("express")
const router = express.Router()

const { createCtrl, deleteOne, readCtrl, updateOne } = require("./../controllers/index")

const validateBody = (req, res, next) => {
    const incomingData = req.body;

    if (!incomingData.name) {
        return res.status(400).send("Name is required, fill it")
    }

    if (!incomingData.email) {
        // valid email check
        return res.status(400).send("Email is required, fill it")
    }

    if (!incomingData.mobileNumber) {
        return res.status(400).send("Mobile Number is required, fill it")
    }

    if (!incomingData.password) {
        return res.status(400).send("Password is required, fill it")
    }

    next()
}

const validateUpdateBody = (req, res, next) => {
    const incomingData = req.body;

    if (incomingData.email) {
        return res.send("Email cannot be updated")
    }

    next()
}

// Routing -> URL -> Method -> Controller

router.post("/create", validateBody, createCtrl);

router.get("/read", readCtrl);

router.put("/update/:id", validateUpdateBody, updateOne)

router.delete("/delete/:id", deleteOne)

module.exports = router

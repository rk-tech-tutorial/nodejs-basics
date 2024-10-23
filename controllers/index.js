const SignupModel = require("../models/index");

const createCtrl = async (request, response) => { // localhost:3000/signup
    // Developer 
    const body = request.body;

    // sync error handling
    try {
        // main logic
        const signup = await SignupModel.create(body)
    } catch (error) {
        console.log(error)
        return response.status(500).send("Unexpected error")
    }

    // Send response according client requirement

    return response.status(200).send(body)
}

const readCtrl = async (req, res) => {
    const signups = await SignupModel.find({}) // read

    res.send(signups)
}


const updateOne = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    // where to update, what to update
    const updatedData = await SignupModel.updateOne({ _id: id }, body) // update

    res.send(updatedData)
}


const deleteOne = async (req, res) => {
    const id = req.params.id;

    const deletedData = await SignupModel.deleteOne({ _id: id }) // delete

    res.send(deletedData)
}

module.exports = { createCtrl, readCtrl, updateOne, deleteOne };
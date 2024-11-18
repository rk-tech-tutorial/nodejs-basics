const jwt = require("jsonwebtoken")
const SignupModel = require("../models/index");

const signupCtrl = async (request, response) => { // localhost:3000/signup
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

const loginCtrl = async (req, res) => {
    const { email, password } = req.body

    const user = await SignupModel.findOne({email: email})

    // if user = null
    if(!user) {
        return res.status(404).send("User not found. Please signup first")
    }

    console.log(user)

    // if user exists
    if(user.password === password) {
        // Generate token
        // Token => create a token
        const payload = {
            email: user.email,
            id: user._id
        }
        const token = jwt.sign(payload, "3o80urjdkljfklsjdk9203u2")

        return res.status(200).send(token)
    } else {
        return res.status(400).send("Password is incorrect")
    }   
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

module.exports = { signupCtrl, loginCtrl, readCtrl, updateOne, deleteOne };
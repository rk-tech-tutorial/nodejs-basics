const express = require('express')
const mongoose = require('mongoose')

const SignupModel = require("./signupModel")

const app = express()
const port = 3000


// Connect to MongoDB
mongoose.connect("mongodb+srv://mongo-learning:QiONskrtrJrIcAvc@cluster0.9kl2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err))


// body-parser
app.use(express.json())


/**
 * 1. Routes
 * 2. Middleware
 */

/**
 * CRUD
 * Create, Read, Update, Delete
 */

// Custom Middlware to validate body data for create

const validateBody = (req, res, next) => {
  const incomingData = req.body;

  if(!incomingData.name) {
    return res.status(400).send("Name is required, fill it")
  }

  if(!incomingData.email) {
    // valid email check
    return res.status(400).send("Email is required, fill it")
  }

  if(!incomingData.mobileNumber) {
    return res.status(400).send("Mobile Number is required, fill it")
  }

  if(!incomingData.password) {
    return res.status(400).send("Password is required, fill it")
  }

  next()
}

app.post("/create", validateBody, async (request, response) => { // localhost:3000/signup
  // Developer 
  const body = request.body;

  // sync error handling
  try {
    // main logic
    const signup = await SignupModel.create(body)
  } catch (error) {
    return response.status(500).send("Unexpected error")
  }

  // Send response according client requirement

  return response.status(200).send(body)
})

app.get("/read", async (req, res) => {
  const signups = await SignupModel.find({}) // read

  res.send(signups)
})

const validateUpdateBody = (req, res, next) => {
  const incomingData = req.body;

  if(incomingData.email) {
    return res.send("Email cannot be updated")
  }

  next()
}

app.put("/update/:id", validateUpdateBody, async(req, res) => {
  const id = req.params.id;
  const body = req.body;

  // where to update, what to update
  const updatedData = await SignupModel.updateOne({_id: id}, body) // update

  res.send(updatedData)
})

app.delete("/delete/:id", async(req, res) => {
  const id = req.params.id;

  const deletedData = await SignupModel.deleteOne({_id: id}) // delete

  res.send(deletedData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
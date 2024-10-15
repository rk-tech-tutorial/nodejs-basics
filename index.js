const express = require('express')
const mongoose = require('mongoose')

const SignupModel = require("./signupModel")

const app = express()
const port = 3000


// Connect to MongoDB
mongoose.connect("mongodb+srv://mongo-learning:QiONskrtrJrIcAvc@cluster0.9kl2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err))

const Cat = mongoose.model('Cat', { name: String });


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

app.post("/create", async (req, res) => { // localhost:3000/signup
  // Developer 
  const body = req.body;

  const signup = await SignupModel.create(body) // create

  console.log(body)

  res.send(body)
})

app.get("/read", async (req, res) => {
  const signups = await SignupModel.find({}) // read

  res.send(signups)
})

app.put("/update/:id", async(req, res) => {
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
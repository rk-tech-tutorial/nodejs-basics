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

app.get("/signup", (req, res) => { // localhost:3000/signup,
  // Developer 

  const kitty = new Cat({ name: 'Ram' });

  kitty.save().then(() => console.log('meow'));


  res.send("Sign Up Page")
})

app.post("/signup", async (req, res) => { // localhost:3000/signup
  // Developer 
  const body = req.body;

  const signup = await SignupModel.create(body) // create

  console.log(body)

  res.send(body)
})

app.get("/login", (req, res) => { // localhost:3000/login
  // Developer
  res.send("Login Page")
})

app.get("/addition-calculator", (req, res) => { // localhost:3000/addition-calculator
  // Developer
  const a = 10
  const b = 20
  const sum = a + b
  res.send(sum.toString())
})

app.get("/query-param-example", (req, res) => { // localhost:3000/query-param-example?name=John
      // req -> take data from client
      // res -> send data to client

      console.log(req.query) // taking data via query params
      const query = req.query

      res.send(query)
})

app.get("/path-param-example/:example/:example2", (req, res) => {
  const path = req.params // taking data via path params

  res.send(path)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
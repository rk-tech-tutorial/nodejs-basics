const express = require('express')
const app = express()
const port = 3000


/**
 * 1. Routes
 * 2. Middleware
 */

app.get("/signup", (req, res) => { // localhost:3000/signup
  // Developer 
  res.send("Sign Up Page")
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
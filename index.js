const express = require('express')
const mongoose = require('mongoose')

const routes = require("./routes/index")

const app = express()
const port = 3000


// Connect to MongoDB
mongoose.connect("mongodb+srv://mongo-learning:QiONskrtrJrIcAvc@cluster0.9kl2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err))


// body-parser
app.use(express.json())

// 1. Start
// 2. Global Config
// 3. Database Config


// routes
app.use("/", routes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
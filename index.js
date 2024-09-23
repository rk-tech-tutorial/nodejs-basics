const express = require('express')
const app = express()
const port = 74

app.get('/google', (req, res) => {
    // Database 
    // Verify the user
    // allow the user to access the google page

    res.send({
        message: 'Hello Google!',
        name: "hello google"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
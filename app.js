const express = require('express')
const path = require('path')

const app = express()

app.use(express.static("./Express.js/public"))



app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./Express.js/navbar.html"))
})

app.all('*', (req, res) => {
    res.status(401).send("This page is not found")
})

app.listen(5000)
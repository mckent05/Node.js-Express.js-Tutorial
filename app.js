const express = require('express')
const  routes  = require("./Express.js/routes/routes.js")
const path = require('path')

const app = express()

app.use(express.json())

app.use("/api/v1/people", routes)

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})





// app.use(express.static("./Express.js/public"))



// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, "./Express.js/navbar.html"))
// })

// app.all('*', (req, res) => {
//     res.status(401).send("This page is not found")
// })

// app.listen(5000)
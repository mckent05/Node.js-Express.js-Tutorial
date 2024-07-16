const express = require('express')
const connectDB = require("./Express.js/db/connect.js")
const  routes  = require("./Express.js/routes/routes.js")

const app = express()

app.use(express.json())

app.use("/api/v1/tasks", routes)

const start = async () => {
    try {
        await connectDB()
        app.listen(5000, () => {
            console.log("Server is listening on port 5000...")
        })
    }
    catch(err) {
        console.log(err)
    }
}

start()
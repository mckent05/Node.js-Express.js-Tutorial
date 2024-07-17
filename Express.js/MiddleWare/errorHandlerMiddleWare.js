const { ResourceNotFound } = require("../Error/ResourceNotFound")


const errorHandlerMiddleWare = (err, req, res, next) => {
    if(err instanceof ResourceNotFound) {
        return res.status(err.statusCode).send({msg: err.message})
    }
    res.status(500).send(`Something went wrong please try again`)
}

module.exports = errorHandlerMiddleWare
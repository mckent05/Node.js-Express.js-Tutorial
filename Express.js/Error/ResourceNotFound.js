class ResourceNotFound extends Error {
    constructor( message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createResourceNotFoundError = (message, statusCode) => {
    return new ResourceNotFound(message, statusCode)
}


module.exports = { createResourceNotFoundError, ResourceNotFound }
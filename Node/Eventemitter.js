const { EventEmitter } = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.on('response', (name, age) => {
    console.log(`This is a user with id: ${name}, aged: ${age}`)
})

eventEmitter.emit('response', "john", "24")
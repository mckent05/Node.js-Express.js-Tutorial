const  express  = require("express")
const { getPeople, addPerson, getPersonDettails, deletePerson } = require("../Controller/peopleController")

const routes = express.Router()

routes.route('/').get(getPeople).post(addPerson)
routes.route("/:id").get(getPersonDettails).delete(deletePerson)

// routes.get("/", (req, res) => {
//     res.json(peopleDetails)
// })
// routes.get("/:id", (req, res) => {
//      const findPerson = peopleDetails.find((person) => person.id === id)
//     if(!findPerson) {

//     }
// })
// routes.get("/", (req, res) => {
//     res.send("I am your own")
// })
// routes.get("/", (req, res) => {
//     res.send("I am your own")
// })

module.exports = routes


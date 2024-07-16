const  express  = require("express")
const { getPeople, addPerson, getPersonDettails, deletePerson, updatePerson } = require("../Controller/peopleController")

const routes = express.Router()

routes.route('/').get(getPeople).post(addPerson)
routes.route("/:id").get(getPersonDettails).delete(deletePerson).put(updatePerson)

module.exports = routes


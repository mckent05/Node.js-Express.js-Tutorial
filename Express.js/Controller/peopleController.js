const  peopleDetails  = require("../people")


const getPeople = (req, res) => {
    res.status(200).json({
        status: "success",
        data: peopleDetails
    })
}

const addPerson = (req, res) => {
    const  newPerson  = req.body
    console.log(req.body)
    res.status(201).json(
        {
            status: "Person Created",
            data:         [
                ...peopleDetails,
                {
                    ...newPerson,
                    id: peopleDetails.length + 1
                }
            ]
        }
)
}

const getPersonDettails =(req, res) => {
    const { id } = req.params
    const findPerson = peopleDetails.find((person) => person.id === parseInt(id))
    if(!findPerson) {
        return res.send("No person with this id")
    }
    res.status(200).json({
        status: 200,
        data: findPerson
    })
}
const deletePerson =(req, res) => {
    const { id } = req.params
    const findPerson = peopleDetails.filter((person) => person.id !== parseInt(id))
    res.status(200).json({
        status: 200,
        data: findPerson
    })
}
module.exports = { getPeople, addPerson, getPersonDettails, deletePerson }
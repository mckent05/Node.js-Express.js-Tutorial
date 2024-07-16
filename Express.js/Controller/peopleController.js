const  peopleDetails  = require("../people")

const Task = require("../Model/TaskModel")


const getPeople = async(req, res) => {
   const tasks = await Task.find({})
   res.status(200).json({
    tasks
   })
}

const addPerson = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(
        {
            task
        }
)
}

const getPersonDettails = async(req, res) => {
    const { id } = req.params
    const task = await Task.findById(id)
    if(!task) {
        return res.send("No task with this id")
    }
    res.status(200).json({
        status: "success",
        task
    })
}

const updatePerson = async (req, res) => {
    const { name, completed } = req.body
    const { id } =  req.params
    const findTask = await Task.findByIdAndUpdate(id, {name, completed})
    res.status(200).json({
            status: "success",
            task: findTask
    })
}
const deletePerson =  async(req, res) => {
    const { id } = req.params
    const task = await Task.findByIdAndDelete(id)
    res.status(200).json({
        status: 200,
        data: task
    })
}
module.exports = { getPeople, 
    addPerson, 
    getPersonDettails, 
    deletePerson,
    updatePerson 
}
const asyncWrapper = require("../MiddleWare/async");
const Task = require("../Model/TaskModel");
const {createResourceNotFoundError} = require("../Error/ResourceNotFound")

const getPeople = asyncWrapper(async(req, res) => {
      const tasks = await Task.find({});
      res.status(200).json({
        tasks,
      });
  });

const addPerson = asyncWrapper(async(req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({
      task,
    });
}) ;

const getPersonDettails = asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return next(createResourceNotFoundError(`No task found with id: ${id}`, 404));
    }
    res.status(200).json({
      status: "success",
      task,
    });
  
});

const updatePerson = asyncWrapper(async(req, res, next) => {
  const { name, completed } = req.body;
  const { id } = req.params;
  const findTask = await Task.findByIdAndUpdate(id, { name, completed }, { new: true, runValidators: true});
  if (!findTask) {
    return next(createResourceNotFoundError(`No task found with id: ${id}`, 404));
  }
  res.status(200).json({
    status: "success",
    task: findTask,
  });
}) ;
const deletePerson = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return next(createResourceNotFoundError(`No task found with id: ${id}`, 404))
  }
  res.status(200).json({
    status: 200,
    data: task,
  });
});
module.exports = {
  getPeople,
  addPerson,
  getPersonDettails,
  deletePerson,
  updatePerson,
};

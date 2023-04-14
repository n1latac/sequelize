const {Router} = require('express');
const TaskController = require('../controllers/Task.controller');
const {getUserInstance} = require('../midllewares/user.mv');
const {validateTask} = require('../midllewares/task.mv');
const pagination = require('../midllewares/pagination.mv')

const taskRouter = Router();

taskRouter.post('/:userId', validateTask, getUserInstance,TaskController.createTask);
taskRouter.get('/:userId', pagination, getUserInstance, TaskController.findAllUserTasks);
taskRouter.get('/count/:userId', getUserInstance, TaskController.getCountOfTasks);

module.exports = taskRouter;

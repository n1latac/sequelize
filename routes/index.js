const {Router} = require('express');
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller');
const {getUserInstance, validateUser} = require('../midllewares/user.mv');
const {validateTask} = require('../midllewares/task.mv');


const router = Router();

router.post('/user', validateUser, UserController.createUser);
router.get('/users',UserController.findAll);
router.get('/user/:userId', getUserInstance, UserController.findOneByPk);
router.delete('/user/:userId', getUserInstance, UserController.deleteOneByPk);
router.put('/user/:userId', getUserInstance, UserController.updateUser);
router.post('/task/:userId', validateTask, getUserInstance,TaskController.createTask);
router.get('/task/:userId', getUserInstance, TaskController.findAllUserTasks);
router.get('/tasks/:userId', getUserInstance, TaskController.getCountOfTasks);


module.exports = router;
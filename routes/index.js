const {Router} = require('express');
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller');


const router = Router();

router.post('/user', UserController.createUser);
router.get('/users',UserController.findAll);
router.get('/user/:id', UserController.findOneByPk);
router.delete('/user/:id', UserController.deleteOneByPk);
router.put('/user/:id', UserController.updateUser);
router.post('/task/:userId',TaskController.createTask);
router.get('/task/:userId', TaskController.findAllUserTasks);
router.get('/tasks/:userId', TaskController.getCountOfTasks);

module.exports = router;
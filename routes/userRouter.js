const {Router} = require('express');
const UserController = require('../controllers/User.controller');
const {getUserInstance, validateUser} = require('../midllewares/user.mv');

const userRouter = Router();

userRouter.post('/', validateUser, UserController.createUser);
userRouter.get('/',UserController.findAll);
userRouter.get('/:userId', getUserInstance, UserController.findOneByPk);
userRouter.delete('/:userId', getUserInstance, UserController.deleteOneByPk);
userRouter.put('/:userId', getUserInstance, UserController.updateUser);

module.exports = userRouter;
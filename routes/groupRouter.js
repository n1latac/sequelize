const {Router} = require('express');
const {getUserInstance} = require('../midllewares/user.mv');
const GroupController = require('../controllers/Group.controller');
const pagination = require('../midllewares/pagination.mv');

const groupRouter = Router();

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
groupRouter.get('/:userId', getUserInstance, GroupController.getUsersGroup);
groupRouter.get('/user/:groupId', GroupController.getAllUsersInOneGroup);
groupRouter.delete('/:userId/:groupId', getUserInstance, GroupController.deleteUserFromGroup);
groupRouter.get('/', pagination, GroupController.getAllGroups);

module.exports = groupRouter;

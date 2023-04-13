const {Router} = require('express');
const {getUserInstance} = require('../midllewares/user.mv');
const GroupController = require('../controllers/Group.controller');

const groupRouter = Router();

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
groupRouter.get('/:userId', getUserInstance, GroupController.getUsersGroup);
groupRouter.delete('/:userId/:groupId', getUserInstance, GroupController.deleteUserFromGroup);

module.exports = groupRouter;

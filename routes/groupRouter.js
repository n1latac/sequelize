const {Router} = require('express');
const multer = require('multer');
const {getUserInstance} = require('../midllewares/user.mv');
const GroupController = require('../controllers/Group.controller');
const pagination = require('../midllewares/pagination.mv');
const {STATIC_PATH} = require('../config/path.config')

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, STATIC_PATH);
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}.${file.originalname}`);
    }
})

const upload = multer({storage})
const groupRouter = Router();

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
groupRouter.get('/:userId', getUserInstance, GroupController.getUsersGroup);
groupRouter.get('/user/:groupId', GroupController.getAllUsersInOneGroup);
groupRouter.delete('/:userId/:groupId', getUserInstance, GroupController.deleteUserFromGroup);
groupRouter.get('/', pagination, GroupController.getAllGroups);
groupRouter.post('/:groupId', upload.single('imgField'), GroupController.createGroupImage)

module.exports = groupRouter;

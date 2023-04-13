const {Group} = require('../models');

module.exports.createGroup = async (req, res, next) => {
    try{
        const {body} = req;
        console.log(body);
        const created = await Group.create(body);
        return res.status(201).send(created);
    }catch(err){
        next(err);
    }
}

module.exports.addUserToGroup = async(req, res, next) => {
    try{
        const {userInstance,params: {groupId}} = req;
        console.log(userInstance);
        const groupInstance = await Group.findByPk(groupId);
        const result = await groupInstance.addUser(userInstance);
        return res.status(201).send(result);
    }catch(err){
        next(err);
    }
}
module.exports.getUsersGroup = async (req, res, next) => {
    try{
        const {userInstance} = req;
        const groups = await userInstance.getGroups();
        return res.status(200).send(groups);
    }catch(err){
        next(err);
    }
}
module.exports.deleteUserFromGroup = async (req, res, next) => {
    try{
        const {params: {groupId}, userInstance} = req;
        const group = await Group.findByPk(groupId);
        const result = await group.removeUser(userInstance);
        if(result){
            return res.status(201).send(`${result}`);
        }
    }catch(err){
        next(err);
    }
}
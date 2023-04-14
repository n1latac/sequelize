const { use } = require('../app');
const paginationMv = require('../midllewares/pagination.mv');
const {Task,User} = require('../models');

module.exports.createTask = async (req, res, next) => {
    try{
        const {userInstance, body} = req;
        const result = await userInstance.createTask(body); //magic method
        res.status(201).send(result);
    }catch(err){
        next(err);
    }
}

module.exports.findAllUserTasks = async (req, res, next) =>{
    try{
        const {userInstance, pagination} = req;
        const result = await userInstance.getTasks({
            ...pagination
        }); //magic method
        res.status(200).send(result);
    }catch(err){
        next(err);
    }
}

module.exports.getCountOfTasks = async (req, res, next) =>{
    try{
        const {userInstance} = req;
        const result = await userInstance.countTasks();
        res.status(200).send(`${result}`);
    }catch(err){
        next(err);
    }
}
const { use } = require('../app');
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
        const {userInstance} = req;
        const result = await userInstance.getTasks(); //magic method
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
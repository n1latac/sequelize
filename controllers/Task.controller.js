const { use } = require('../app');
const {Task,User} = require('../models');

module.exports.createTask = async (req, res, next) => {
    try{
        const {params: {userId}, body} = req;
        const user = await User.findByPk(userId);
        const result = await user.createTask(body); //magic method
        res.status(201).send(result);
    }catch(err){
        next(err);
    }
}

module.exports.findAllUserTasks = async (req, res, next) =>{
    try{
        const {params: {userId}} = req;
        const user = await User.findByPk(userId);
        const result = await user.getTasks(); //magic method
        res.status(200).send(result);
    }catch(err){
        next(err);
    }
}

module.exports.getCountOfTasks = async (req, res, next) =>{
    try{
        const {params: {userId}} = req;
        const user = await User.findByPk(userId);
        const result = await user.countTasks();
        res.status(200).send(`${result}`);
    }catch(err){
        next(err);
    }
}
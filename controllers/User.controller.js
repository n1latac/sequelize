const {User} = require('../models')


module.exports.createUser = async (req, res, next) => {
    try{
        const {body} = req;
        const createdUser = User.create(body);
        return res.status(201).send(createdUser);
    }catch(err){
        next(err);
    }
}

module.exports.findAll = async (req, res, next) => {
    try{
        const result = User.findAll();
        return res.status(200).send(result);
    }catch(err){
        next(err);
    }
}

module.exports.findOneByPk = async (req, res, next) => {
    try{
        const {params: {id}} = req;
        const findUser = User.findByPk(id);
        return res.status(200).send(findUser);
    }catch(err){
        next(err);
    }
}
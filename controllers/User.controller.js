const {User} = require('../models')


module.exports.createUser = async (req, res, next) => {
    try{
        const {body} = req;
        const createdUser = await User.create(body);
        return res.status(201).send(createdUser);
    }catch(err){
        next(err);
    }
}

module.exports.findAll = async (req, res, next) => {
    try{
        const result = await User.findAll();
        return res.status(200).send(result);
    }catch(err){
        next(err);
    }
}

module.exports.findOneByPk = async (req, res, next) => {
    try{
        const {userInstance} = req;
        return res.status(200).send(userInstance);
    }catch(err){
        next(err);
    }
}

module.exports.deleteOneByPk = async (req, res, next) => {
    try{
        const {params: {id}} = req;
        const deletedOne = await User.destroy({
            where: {
                id: id
            }
        })
        if(deletedOne){
            res.status(201).send('Deleted one');
        }else{
            res.status(204).send('cancel delete');
        }
    }catch(err){
        next(err);
    }
}

module.exports.updateUser = async (req,res,next) =>{
    // try{
    //     const {params: {id}, body} = req;
    //     const updatedUser = await User.update(body,{
    //         where:{
    //             id: id
    //         }
    //     })
    //     console.log(updatedUser);
    //     return res.status(200).send(updatedUser);
    // }catch(err){
    //     next(err);
    // }
    try{
        const {userInstance, body} = req;
        const updatedUser = await userInstance.update(body);
        return res.status(201).send(updatedUser);
    }catch(err){
        next(err);
    }
}


const {User} = require('../models');
const {USER_SCHEMA} = require('../schemas/user.schemas');

module.exports.getUserInstance = async (req, res, next) => {
    try{    
        const {params: {userId}} = req;
        const user = await User.findByPk(userId);
        if(!user){
            throw new Error('User not found!');
        }
        req.userInstance = user;
        next();
    }catch(err){
        next(err);
    }
}



module.exports.validateUser = async (req, res, next) => {
    try{
        const {body} = req;
        const validated = await USER_SCHEMA.validate(body);
        if(validated){
            next();
        }
    }catch(err){
        next(err);
    }
}
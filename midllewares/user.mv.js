const {User} = require('../models');
const {USER_SCHEMA} = require('../schemas/user.schemas');
const UserError = require('../errors/UserError');

module.exports.getUserInstance = async (req, res, next) => {
    try{    
        const {params: {userId}} = req;
        const user = await User.findByPk(userId,{
            attributes: {
                exclude: ['password']
            }
        });
        if(!user){
            throw new UserError('User not found!');
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
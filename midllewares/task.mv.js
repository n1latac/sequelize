const {TASK_SCHEMA} = require('../schemas/task.schemas');

module.exports.validateTask = async(req, res, next) => {
    try{
        const {body} = req;
        const validated = await TASK_SCHEMA.validate(body);
        if(validated){
            next();
        }
    }catch(err){
        next(err);
    }
}


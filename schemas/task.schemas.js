const yup = require('yup');

module.exports.TASK_SCHEMA = yup.object({
    body: yup.string().required('task is required').min(1),
    isDone: yup.boolean().required('this field is required'),
    deadline: yup.date()
})
const yup = require('yup');


module.exports.USER_SCHEMA = yup.object({
    firstName: yup.string().required('first name is required').min(1),
    lastName: yup.string().required('last name is required').min(1),
    email: yup.string().required('email is required').email(),
    password: yup.string().required().min(6),
    birthday: yup.string(),
    gender: yup.string()
})
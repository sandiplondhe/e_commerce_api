const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: ['com', 'net'] }),
    contact: Joi.number().min(10).required(),
    password: Joi.string().required(),
    is_admin: Joi.number().required(),
    token: Joi.string().required(),
});
module.exports = userSchema;

const db = require('../models');
const userSchema = require('../utils/userValidation');
const Users = db.users;
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/jwtToken');

// @addUser
const createUser = async (req, res) => {
    let user = {
        username: req.body.username,
        email: req.body.email,
        contact: req.body.contact,
        password: await bcrypt.hash(req.body.password, 10),
        is_admin: req.body.is_admin,
    };
    const tokenValue = generateToken(user);
    user.token = tokenValue;
    if (userSchema.validate(user).error) {
        res.status(200).send({
            error: userSchema
                .validate(user)
                .error.details[0].message.toString(),
        });
    } else {
        const isPresent = await Users.findOne({
            where: { email: user.email },
        });
        if (isPresent === null) {
            await Users.create(user).then(() =>
                res.status(200).send({
                    success: `Registration completed Successfully with token ${user.token}`,
                })
            );
        } else {
            res.status(200).send({
                error: 'user with email id is already exist',
            });
        }
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = {
            email: email,
            password: password,
        };
        if (!(email && password)) {
            res.status(400).send('All input are required');
        }
        const user = await Users.findOne({
            where: { email: email },
        });
        if (user && (await bcrypt.compare(password, user.password))) {
            const tokenValue = generateToken(userData);
            user.token = tokenValue;
            res.status(200).send({
                success: `${user.token}`,
            });
        } else {
            res.status(400).send('Invalid credentials');
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createUser,
    loginUser,
};

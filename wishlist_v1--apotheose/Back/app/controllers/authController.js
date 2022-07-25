
const User = require("../models/user");
const bcrypt = require('bcrypt');
const createToken = require('../../utils').createToken

/**
 * 
 */
const authController = {

    async add(req, res) {

        try {
            const userToCreate = await User.findOne(req.body.email)
            if (userToCreate) {
                res.status(403).json("Acount already exist")
                return
            }
        } catch (err) {
            res.status(500).json("Error no response from server")
        }

        try {
            const user = new User({
                pseudo: req.body.pseudo,
                email: req.body.email,
                password: req.body.password,
            })
            let createUser = await user.save()
            delete createUser.password

            createUser.token = createToken(createUser)
            res.status(201).send(createUser);

        } catch (err) {
            res.status(500).json("error")
        }

    },
    async login(req, res) {

        try {
            const user = await User.findOne(req.body.email)
            const validate = await bcrypt.compare(req.body.password, user.password)
            if (validate) {
                res.status(200).send({ ...user, token: createToken(user) })
            }
        } catch (err) {
            res.status(500).json("error with response from server user")
        }

    }
};

module.exports = authController;

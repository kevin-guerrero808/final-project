const bycriptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('./models/user')


const register = (req, res) => {
    const { firstName, lastName, email, password } = req.body();

    if (!email) res.status('400').send({msg: "required email"})
    if (!password) res.status('400').send({msg: "required email"})

    const userPayload = {
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        role: 'user',
        active: false 
    }

    const salt = bycriptjs.getSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)
    userModel.password = hashPassword

    const userModel = new userModel(userPayload);

    userModel.save((err, userStoraged) => {
        if (error) {
            res.status(400).send({msg: 'Error to create user'})
        } else {
            res.status(200).send(userStoraged)
        }
    })

}

const login = (req, res) => {
    const {email, password } = req.body;
    if (!email) res.status(400).send({msg: "error from server"})
    if (!password) res.status(400).send({ msg: "Password required"})
    const emailLowerCase = email.toLowerCase();
    userModel.findOne({ email: emailLowerCase }, (error, userStoraged) => {
        if (error) {
            res.status(500).send({ msg: "Error from server"})
        } else {
            bycriptjs.compare(password, userStoraged.password, (bcrytError, check) => {
                if (bcryptError) {
                    res.status(500).send({ msg: "Error from server"})
                } else if (!check) {
                    res.status(400).send({ msg: "User or password error"})
                } else if (!userStoraged.active) {
                    res.status(401).send({ msg: "User unauthorized or inactive"})
                } else {
                    res.status(200).send({
                        access: jwt.createAccessToken(userStoraged)
                    })
                }
            })
        }
    })
    
}

const refreshAccessToken = (req, res) => {
    const { token } = req.body;
    if (!token) res.status(400).send({ msg: "Token required"})
    const { user_id } = jwt.decode(token)
    userModel.findOne({ _id: user_id }), (error, userStoraged) => {
        if (error) {
            res.status(500).send({ msg: "Error from server" })
        } else {
            res.status(200).send({
                accessToken: jwt.createAccessToken(userStoraged)
            })
        }
    }
}


module.exports = {
    register,
    login,
    refreshAccessToken
}
const usermodel = require('../models/usermodel')
const jwt = require('jsonwebtoken')

module.exports.getuser = async (req, res) => {
    const _data = await usermodel.find({})
    if (_data) {
        return res.send({ code: 200, message: 'success', data: _data })
    } else {
        return res.send({ code: 500, message: 'Service error' })
    }
}
module.exports.adduser = async (req, res) => {

    const { username,email, password, phone,type,dateofbirth,date } = req.body
    const userExists = await usermodel.findOne({ username: username })

    
    if (userExists) {
        if (userExists.password === password) {
            return res.send({ code: 400, message: ' username or Password allready taken' })
        }
        // const _token = await jwt.sign({ ...userExists }, 'PRIV_123')

       
    } else {
        const _res = await usermodel.create({ username, email, password, phone,type,dateofbirth,date})
        if (_res) {
            console.log("_res in backend ",_res);
            console.log("res in backend ",res);
            return res.send({ code: 300, message: 'sing up success', })
        } else {
            return res.send({ code: 500, message: 'Service error' })
        }

        // return res.send({
        //     code: 200,
        //     message: 'login success',
        //     token: _token,
        //     type: userExists.type
        // })
        // return res.send({ code: 500, message: 'Service error' })
    }
}

module.exports.loginuser = async (req, res) => {

    const { username, password } = req.body
    const userExists = await usermodel.findOne({ username: username })
    if (userExists) {
        if (userExists.password !== password) {
            return res.send({ code: 400, message: 'Username or Password wrong.', })
        }
        const _token = await jwt.sign({ ...userExists }, 'PRIV_123')

        return res.send({
            code: 200,
            message: 'login success',
            token: _token,
            type: userExists.type
        })
    } else {
        return res.send({ code: 500, message: 'user profile not exit ' })
    }
}
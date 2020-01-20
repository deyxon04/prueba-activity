'use strict'

const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const JwtMiddleWares = {}

JwtMiddleWares.createToken = (payload) => {
    return jwt.sign({ user: payload }, keys.SECRET_TOKEN, { expiresIn: '5h' })
}

JwtMiddleWares.validateToken = (req, res, next) => {
    jwt.verify(req.headers.authorization, keys.SECRET_TOKEN, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                error: false,
                messge: 'permission denied beacause this token is invalid'
            })
        }
        req.user = decoded.user
        next();
    })
}

module.exports = JwtMiddleWares

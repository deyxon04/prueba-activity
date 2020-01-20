'use strict'

const routerManager = require('express').Router()
const authController = require('../controllers/auth')
const userController = require('../controllers/user')
const jwt = require('../lib/middleware/jwt')


routerManager.post('/auth/signup', authController.singup)
routerManager.post('/auth/signin', authController.singin)

routerManager.get('/user', jwt.validateToken, userController.getUsers)
routerManager.route('/user/:id')
    .get(jwt.validateToken, userController.getOneUser)
    .delete(jwt.validateToken, userController.deleteOneUser)
    .put(jwt.validateToken, userController.modifyUser)


module.exports = routerManager

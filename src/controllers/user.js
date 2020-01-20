'use strict'

const userService = require('../services/user')

const userController = {}

userController.getUsers = async (req, res) => {
    try {
        const resp = await userService.getUsers()
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
}

userController.getOneUser = async (req, res) => {
    try {
        const { id } = req.params
        const resp = await userService.getOneUser(id)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
}

userController.deleteOneUser = async (req, res) => {
    try {
        const { id } = req.params
        await userService.deleteOneUser(id)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
}


userController.modifyUser = async (req, res) => {
    try {
        const { id } = req.params
        const resp = await userService.updateUser(id, req.body)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }

}


module.exports = userController

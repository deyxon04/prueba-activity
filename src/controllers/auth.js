'use strict'

const userService = require('../services/auth')

const authController = {}

authController.singup = async (req, res) => {
  try {
    const resp = await userService.singup(req.body)
    res.status(200).json(resp)
  } catch (error) {
    res.status(500).json(error)
  }
}

authController.singin = async (req, res) => {
  try {
    const resp = await userService.singin(req.body)
    res.status(200).json(resp)
  } catch (error) {    
    res.status(500).json(error)
  }
}

module.exports = authController

'use strict'

const MysqlLib = require('../lib/mysql')
const bcrypt = require('bcrypt')
const jwt = require('../lib/middleware/jwt')

const userService = {}

userService.getUsers = async () => {
    try {
        const users = await MysqlLib.getUsers()
        return users
    } catch (error) {
        return { ok: false, message: 'ha ocurrido un error', error }
    }
}

userService.getOneUser = async (cedula) => {
    try {
        const users = await MysqlLib.getOneUser(cedula)
        return users
    } catch (error) {
        return { ok: false, message: 'ha ocurrido un error', error }
    }
}

userService.deleteOneUser = async (cedula) => {
    try {
        await MysqlLib.deleteOneUser(cedula)
        return { ok: true, message: 'Usuario eliminado correctamente' }
    } catch (error) {
        return { ok: false, message: 'ha ocurrido un error', error }
    }
}

userService.updateUser = async (cedula, data) => {
    try {
        const user = await MysqlLib.modifyUser(cedula, data)
        return { ok: true, message: 'Actualizado correctamente' }
    } catch (error) {
        return { ok: false, message: 'ha ocurrido un error', error }
    }
}


module.exports = userService

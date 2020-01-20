'use strict'

const MysqlLib = require('../lib/mysql')
const bcrypt = require('bcrypt')
const jwt = require('../lib/middleware/jwt')

const authService = {}

authService.singup = async (user) => {
    try {
        user.password = await bcrypt.hash(user.password, 10)
        await MysqlLib.create(user)
        return { ok: true, message: 'Usuario registrado correctamente' }
    } catch (error) {
        throw { ok: false, message: 'ha ocurrido el siguiente error', error }
    }
}

authService.singin = async (body) => {
    const user = (await MysqlLib.getUser(body))[0]        
    if (user) {        
        if (!bcrypt.compare(body.password, user.password)) {
            throw { ok: false, code: 500, message: 'contraseña inválida' }
        }
        const token = jwt.createToken(user)
        user.password = '*****'
        return { user, token }
    } else {
        throw { ok: false, code: 500, message: 'credenciales incorrectas' }
    }
}




module.exports = authService

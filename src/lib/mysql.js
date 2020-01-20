'use strict'

const mysql = require('mysql')
const keys = require('../config/keys')
const bcrypt = require('bcrypt')
const mySqlLib = {}

mySqlLib.ConnectionDbs = () => {
    return mysql.createConnection({
        host: keys.HOST,
        user: keys.USER_DB,
        password: keys.PASSWORD,
        database: keys.DATABASE
    })
}

mySqlLib.create = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const connection = mySqlLib.ConnectionDbs()
        newUser.password = await bcrypt.hash(newUser.password, 10)
        connection.connect()
        let sql = 'INSERT INTO users set ?'
        connection.query(sql, [newUser], (error, result, fields) => {
            if (error) reject(error)
            resolve(result)
        })
        connection.end()
    })
}
mySqlLib.getUser = (body) => {
    return new Promise(async (resolve, reject) => {
        const connection = mySqlLib.ConnectionDbs()
        connection.connect()
        let sql = 'SELECT * from users where usuario=?'
        connection.query(sql, [body.usuario], (error, result, fields) => {
            if (error) reject(error)
            resolve(result)
        })
        connection.end()
    })
}


mySqlLib.getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const connection = mySqlLib.ConnectionDbs()
        connection.connect()
        let sql = 'SELECT * from users'
        connection.query(sql, [], (error, result, fields) => {
            if (error) reject(error)
            resolve(result)
        })
        connection.end()
    })
}
mySqlLib.getOneUser = (cedula) => {
    return new Promise(async (resolve, reject) => {
        const connection = mySqlLib.ConnectionDbs()
        connection.connect()
        let sql = 'SELECT * from users where cedula=?'
        connection.query(sql, [cedula], (error, result, fields) => {
            if (error) reject(error)
            resolve(result)
        })
        connection.end()
    })
}

mySqlLib.deleteOneUser = (cedula) => {
    return new Promise(async (resolve, reject) => {
        const connection = mySqlLib.ConnectionDbs()
        connection.connect()
        let sql = 'DELETE from users where cedula=?'
        connection.query(sql, [cedula], (error, result, fields) => {
            if (error) reject(error)
            resolve(result)
        })
        connection.end()
    })
}

mySqlLib.modifyUser = (cedula, data) => {    
    return new Promise(async (resolve, reject) => {
        const connection = mySqlLib.ConnectionDbs()
        connection.connect()
        let sql = 'UPDATE users set ? where cedula=?'
        connection.query(sql, [data, cedula], (error, result, fields) => {
            if (error) reject(error)
            resolve(result)
        })
        connection.end()
    })
}



module.exports = mySqlLib

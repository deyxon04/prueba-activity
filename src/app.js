'use strict'

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes')

// Declaraciones
const app = express()

// Configuraciones
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Configuracion de rutas
app.use('/api', router)

module.exports = app

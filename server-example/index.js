const mongoose = require('mongoose')
const app = require('./app')

const port = process.env.PORT || 3000

const { APP_VESION, IP_SERVER, PORT_DB} = require('./constants')
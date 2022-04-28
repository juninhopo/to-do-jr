const express = require('express')
const route = require('./route')
const path = require('path')

// Init the server
const server = express.Router()

// Setting the view engine
server.set('view engine', 'ejs')

// Connect css
server.use(express.static('public'))

// Setting view folder
server.set('view', path.join(__dirname, 'view'))

server.use(express.urlencoded({ extended: true}))

// Setting node route
server.use(route)

// List server in port
server.listen(5000, () => console.log(' Server On - Open in: http://localhost:5000'))
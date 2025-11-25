const { Router } = require('express')
const routes = Router()
const users = require('./app/controllers/UsersController.js')
//rotas de usuarios
routes.get('/users', users.index)
routes.get('/users/:id', users.show)
routes.post('/users', users.create)
routes.put('/users/:id', users.update)
routes.delete('/users/:id', users.destroy)


module.exports = routes

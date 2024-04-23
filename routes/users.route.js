const {Router} = require('express')

const {viewUsers,usuariosPos,usuariosPut,usuariosDelete} = require('../controllers/users.controller')

const routerUser = Router()

routerUser.get('', viewUsers)
routerUser.post('', usuariosPos)
routerUser.put('/:id', usuariosPut)
routerUser.delete('/:id', usuariosDelete)

module.exports = routerUser
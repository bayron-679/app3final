const {Router} = require('express')

const {viewUsers,crearproductoPost,actuproductoPut,verproductosactuaGet,productoDelete,creardescriproductoPost,
    actudescriproductoPut,vercantiproductoGet,creardatosloginPost,usuarios_tablaPos,actunombtablapatch,tablaDelete} = require('../controllers/prod.controller')

const routerprod = Router()

routerprod.get('', viewUsers)
routerprod.post('', crearproductoPost)
routerprod.put('/:id', actuproductoPut)
routerprod.get('/:id', verproductosactuaGet)
routerprod.delete('/:id', productoDelete)
routerprod.post('', creardescriproductoPost)
routerprod.put('/:desc1', actudescriproductoPut)
routerprod.get('/:id1', vercantiproductoGet)
routerprod.post('', creardatosloginPost)
routerprod.post('', usuarios_tablaPos)
routerprod.patch('/:tabla', actunombtablapatch)
routerprod.delete('/:tabla', tablaDelete)

module.exports = routerprod
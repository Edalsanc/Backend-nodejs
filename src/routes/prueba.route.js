const {Router} = require('express')
const route = Router()

const pruebaCtrl = require('../controllers/pruebacontrollers')

route.get('/',pruebaCtrl.obtener)
route.post('/',pruebaCtrl.crear)
route.put('/',pruebaCtrl.actualizar)
route.delete('/',pruebaCtrl.eliminar)

module.exports = route
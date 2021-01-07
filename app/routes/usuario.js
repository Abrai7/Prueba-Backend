const router = require('express').Router()
const {addUsuario,signInUsuario,getTarjetasUsuario,getTarjetasUsuarioPrecio} = require('../controllers/usuario')
const verifyToken = require('../../auth')

router.post('/usuarios/registro',verifyToken,addUsuario)
router.post('/usuarios/iniciar-sesion',verifyToken,signInUsuario)
router.get('/tarjetas/usuarios/:id',verifyToken,getTarjetasUsuario)
router.post('/tarjetas/usuarios/',verifyToken,getTarjetasUsuarioPrecio)

module.exports = router

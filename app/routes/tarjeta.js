const route = require('express').Router()
const {getTarjetas,getTarjetasPrecio, getOneTarjeta, addTarjeta, addUsuario,getTarjetasUsuario,getTarjetasUsuarioPrecio} = require('../controllers/tarjeta')

const verifyToken = require('../../auth')

router.get('/tarjetas/',verifyToken,getTarjetas)
router.get('/tarjetas/precio/:id',verifyToken,getTarjetasPrecio)
router.get('/tarjetas/:id',verifyToken,getOneTarjeta)
router.post('/tarjetas/',verifyToken,addTarjeta)
module.exports = route

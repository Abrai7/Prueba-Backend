const tarjetaModel = require("../models/tarjeta")
const mysqlConnection=require('../../config/database.js')

function getTarjetas(req,res){
   tarjetaModel.getTarjetas((data,error) =>{
       res.json(data)
   })
}


function getTarjetasPrecio(req,res){
    const { id } = req.params
    tarjetaModel.getTarjetasPrecio(id, (data, error) => {
        res.json(data)
    })
 }
 

function getOneTarjeta(req,res)
{
    const { id } = req.params
    tarjetaModel.getOneTarjeta(id, (data, error) => {
        res.json(data)
    })
}

function addTarjeta(req,res)
{
    const {nombre,precio,fecha_publicacion,imagen,usuario} =  req.body
    console.log(`tarjeta : ${nombre}, ${precio},${fecha_publicacion}, ${imagen}, ${usuario}`)
    tarjetaModel.addTarjeta({nombre,precio,fecha_publicacion,imagen,usuario},(data,error) =>{
        res.json(data)
    })
}

module.exports = 
{
    getTarjetas,
    getTarjetasPrecio,
    getOneTarjeta,
    addTarjeta
}
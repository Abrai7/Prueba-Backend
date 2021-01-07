const usuarioModel = require("../models/usuario")


function addUsuario(req,res)
{
    const {correo,contraseña} =  req.body
    usuarioModel.addUsuario({correo,contraseña},(data,error) =>{
        res.json(data)
    })
}

function signInUsuario(req,res)
{
    const {correo,contraseña} =  req.body
    usuarioModel.signInUsuario({correo,contraseña},(data,error) =>{
        res.json(data)
    })
}

function getTarjetasUsuario(req,res)
{
    const { id } = req.params
    usuarioModel.getTarjetasUsuario(id, (data, error) => {
        res.json(data)
    })
}

function getTarjetasUsuarioPrecio(req,res)
{
    const {usuario,precio} =  req.body
    usuarioModel.getTarjetasUsuarioPrecio({usuario,precio}, (data, error) => {
        res.json(data)
    })
}



module.exports = 
{
    addUsuario,
    signInUsuario,
    getTarjetasUsuario,
    getTarjetasUsuarioPrecio
}
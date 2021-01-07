const { json } = require('body-parser')
const mysqlConnection=require('../../config/database.js')
const jwt = require('jsonwebtoken')

var usuarioModel = {
    addUsuario : (data, callback) => {
        if(mysqlConnection)
        {
            let sql = `insert into usuario (correo,contraseña) values (${mysqlConnection.escape(data.correo)},${mysqlConnection.escape(data.contraseña)})`
            mysqlConnection.query (sql, (error,results) =>
            {
                if(error) throw error
                let id=results.insertId;
                const token = jwt.sign({ id: data.correo}, data.contraseña, {
                    expiresIn: 86400, // 24 hours
                });
                callback(token)
            })
        }
    },

    signInUsuario: (data, callback) => {
        if(mysqlConnection)
        {
            let sql = `select * from usuario where correo=${mysqlConnection.escape(data.correo)} and contraseña=${mysqlConnection.escape(data.contraseña)}`
            mysqlConnection.query (sql, (error,results) =>
            {
                if(error) throw error
                let id=results.insertId;
                const token = jwt.sign({ id:data.correo}, data.contraseña, {
                    expiresIn: 86400, // 24 hours
                });
                callback(token+' Inicio de sesión exitoso')
            })
        }
    },

    getTarjetasUsuario : (data, callback) => {
        if(mysqlConnection) {
            let sql = `select nombre,precio,fecha_publicacion,imagen from tarjeta,usuario,usuariotarjeta where usuario.idusuario = ${mysqlConnection.escape(data)} and usuariotarjeta.idusuario=usuario.idusuario and usuariotarjeta.idtarjeta=tarjeta.idtarjeta `

            mysqlConnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    getTarjetasUsuarioPrecio : (data, callback) => {
        if(mysqlConnection) {

            let sql = `select nombre,precio,fecha_publicacion,imagen from tarjeta,usuario,usuariotarjeta where usuario.idusuario = ${mysqlConnection.escape(data.usuario)} and usuariotarjeta.idusuario=usuario.idusuario and usuariotarjeta.idtarjeta=tarjeta.idtarjeta and tarjeta.precio >= ${mysqlConnection.escape(data.precio)}`
            mysqlConnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    }

}


 

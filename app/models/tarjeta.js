const { json } = require('body-parser')
const mysqlConnection=require('../../config/database.js')

var tarjetaModel = {
    getTarjetas : (callback) => {
        if(mysqlConnection)
        {
            let sql = `select * from tarjeta`

            mysqlConnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    getTarjetasPrecio : (data,callback) => {
        if(mysqlConnection)
        {
            let sql = `select * from tarjeta where precio=${mysqlConnection.escape(data)} `

            mysqlConnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    getOneTarjeta : (data, callback) => {
        if(mysqlConnection) {
            let sql = `select * from tarjeta where idtarjeta = ${mysqlConnection.escape(data)}`

            mysqlConnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    
   
    addTarjeta : (data, callback) => {
        if(mysqlConnection)
        {
            let buff = new Buffer.from(data.imagen,'utf-8')
            let base64data = buff.toString('base64')
            let sql = `insert into tarjeta (nombre,precio,fecha_publicacion,imagen) values (${mysqlConnection.escape(data.nombre)},${mysqlConnection.escape(data.precio)}, ${mysqlConnection.escape(data.fecha_publicacion)}, ${mysqlConnection.escape(base64data)})`
            mysqlConnection.query (sql, (error,results) =>
            {
                
                if(error) throw error
                let id=results.insertId;
                let sql3=`insert into usuariotarjeta values (${mysqlConnection.escape(data.usuario)},`+id+`)`
                mysqlConnection.query (sql3, (error,rows) =>
                {
                    if(error) throw error
                    callback('message:Tarjeta añadida')
                })
            })   
        }
    }
}


module.exports=tarjetaModel
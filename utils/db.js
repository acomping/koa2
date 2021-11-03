const mysql = require('mysql')

const pool = mysql.createPool({
    host:'localhost',
    port:3306,
    database:'zixun',
    user:'root',
    password:'111111'
})

function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql,function(err,rows){
            callback(err,rows)
            connection.release()//中断连接
        })
    })
}
exports.query = query


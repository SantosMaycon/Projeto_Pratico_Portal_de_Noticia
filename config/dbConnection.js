var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexao estabelecida com sucesso!');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : null,
        database : 'portal_noticias'
    });
}

module.exports = function(){
    return connMysql;
}
        
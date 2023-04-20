const Mysql = require('Mysql2');

const con = Mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "emma2805",
    database: 'boleteria'
});

module.exports = con;
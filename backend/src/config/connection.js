const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yuyuhakusho',
    database: 'himym'
});

module.exports = connection;
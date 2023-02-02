const mysql = require('mysql2');
const http = require('http');
const url = require('url');
const qs = require('qs');
const PORT = 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'th_ungdungluuthongtinkh',
    charset: 'utf8_general_ci',
})

connection.connect((err) => {
    if (err) {
        throw err.message;
    } else {
        console.log('Connect success');
        
        let sqlInsert = `insert into customer(name, address) value('Nam', 'Ha Noi')`;
        connection.query(sqlInsert, (err, result) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log('Insert success');
            }
        })

        let sqlUdate = `update customer set address = 'Hai Duong' where name = 'Nam'`
        connection.query(sqlUdate, (err, result) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log(result.affectedRows + ' updated');
            }
        })
    }
})


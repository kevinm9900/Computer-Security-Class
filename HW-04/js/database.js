var mysql = require('mysql');

function execute() {
    var connection = mysql.createConnection({
        host: '104.131.178.50',
        port: '3306',
        user: 'root',
        password: 'COSC4343',
        // database: 'homework'
    });

    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
}

execute()

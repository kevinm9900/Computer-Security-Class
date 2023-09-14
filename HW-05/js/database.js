var mysql = require('mysql');

function execute() {
    var connection = mysql.createConnection({
        host: '167.99.116.18',
        port: '22',
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

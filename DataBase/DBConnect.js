var mysql = require("mysql");
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ExamSystem',
    port: '3306',
    multipleStatements: true
});

con.connect(function (err) {
    if (err) {
        console.log("Can't connect to the database!");
    } else {
        console.log("Connected to the database!");
    }
});

con.on('error', function (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        con.connect();
    } else {
        console.log("Disconnected to the database during run time: " +  err);
    }
});

exports.getCon = function () {
    return con;
};


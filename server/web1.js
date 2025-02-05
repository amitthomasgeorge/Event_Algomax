var mysql = require("mysql");

var con = mysql.createPool({
    connectionLimit: 50,
    host: 'bsat8p5xnva0yj1vchrm-mysql.services.clever-cloud.com',
    user: 'uianxt3quoyt8r0e',
    password: 'aRrSttlUE8ksq2fmwV3t',
    database: 'bsat8p5xnva0yj1vchrm',
    connectTimeout: 28800000,
    acquireTimeout: 28800000,
    waitForConnections: true,
    queueLimit: 0
});

module.exports = con;

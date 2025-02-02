var mysql = require("mysql")
var con=mysql.createConnection({
    host: 'bsat8p5xnva0yj1vchrm-mysql.services.clever-cloud.com',
    user: 'uianxt3quoyt8r0e',
    password: 'aRrSttlUE8ksq2fmwV3t',
    database: 'bsat8p5xnva0yj1vchrm',
});
con.connect((error)=>{
    if(error)  throw error;
});

module.exports = con;
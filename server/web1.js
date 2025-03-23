var mysql = require("mysql")
require("dotenv").config();
var con=mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
con.connect((error)=>{
    if(error)  throw error;
});

module.exports = con;



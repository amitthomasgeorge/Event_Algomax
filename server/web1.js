var mysql = require("mysql")
var dbconfig = {
    host: 'bsat8p5xnva0yj1vchrm-mysql.services.clever-cloud.com',
    user: 'uianxt3quoyt8r0e',
    password: 'aRrSttlUE8ksq2fmwV3t',
    database: 'bsat8p5xnva0yj1vchrm',
}
var con;
function handle(){
con=mysql.createConnection(dbconfig);
con.connect(function(err){
    if(err){
        console.log('error when connect to db:',err);
        setTimeout(handle,2000);
    }
});
con.on('error',function(err){
    console.log('db error',err);
    if(err.code ==='PROTOCOL_CONNECTION_LOST'){
        handle();
    }
    else{
        throw err;
    }
});
}
handle();
module.exports = con;

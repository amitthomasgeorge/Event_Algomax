const mysql = require("mysql");

const con = mysql.createConnection({
    host: 'bsat8p5xnva0yj1vchrm-mysql.services.clever-cloud.com',
    user: 'uianxt3quoyt8r0e',
    password: 'aRrSttlUE8ksq2fmwV3t',
    database: 'bsat8p5xnva0yj1vchrm',
});

// Function to connect and handle errors
function connectDatabase() {
    con.connect((error) => {
        if (error) {
            console.error("Database connection failed:", error);
            setTimeout(connectDatabase, 5000); // Retry after 5 seconds
        } else {
            console.log("Connected to MySQL database.");
        }
    });
}

// Handle connection loss and auto-reconnect
con.on("error", (err) => {
    console.error("MySQL error:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
        console.log("Reconnecting to MySQL...");
        connectDatabase(); // Reconnect if connection is lost
    } else {
        throw err;
    }
});

// Connect to the database initially
connectDatabase();

module.exports = con;

// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
    
//     // Your username
//     user: 'root',
    
//     //Your password
//     password: 'password',
//     database: 'burgers_db'
// });

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'j0szqyovp82rkmsn',
		password: 'kjevqvfhd4hk39tw',
		database: 'burgers_db'
	});
};


// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
// });

module.exports = connection;

const mysql = require("mysql");
require("dotenv").config();

const db_config = {
	connectionLimit: 100,
	host: process.env.mysqlHost,
	user: process.env.mysqlUser,
	password: process.env.mysqlPassword,
	database: process.env.mysqlDatabase,
};
let mysqlConnection;

function handleDisconnect() {
	mysqlConnection = mysql.createConnection(db_config);

	mysqlConnection.connect(function (err) {
		if (err) {
			console.log("error when connect<<zxczxcing to db:", err);
			setTimeout(handleDisconnect, 500);
		} else {
			console.log("Database is on");
		}
	});
	mysqlConnection.on("error", function (err) {
		//Db Error , print err
		if (err.code === "PROTOCOL_CONNECTION_LOST") {
			handleDisconnect();
		} else {
			throw err("database failed to connect");
		}
	});
}
handleDisconnect();

module.exports = mysqlConnection;

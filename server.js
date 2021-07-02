const express = require("express");
const app = express();
const login = require("./routes/login");
const orders = require("./routes/orders");
const search = require("./routes/search");
const users = require("./routes/users");

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/search", search);
app.use("/api/user", users);

// Starting the server
app.listen(app.get("port"), () => {
	console.log(`Server on port ${app.get("port")}`);
});

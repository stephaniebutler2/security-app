"use strict";

module.exports = (app, server) => {
	app.use("/api/default", require("./default.route"));
	app.use('/api/scopes', require("./scopes.route"));
	app.use('/api/attributes', require("./attributes.route"));
	app.use('/api/user', require('./user.route'));
	app.use('/api/select', require('./select.route'));
	app.use('/api/auth', (req, res)=>{
		res.send(req.authInfo);
	});
	app.use("/api/test", (req, res)=>{
		res.send("test worked");
	});
};

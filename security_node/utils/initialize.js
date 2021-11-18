module.exports = {
	initExpress: function () {
		console.log("Initializing Express...");
		var express = require('express');
		const passport = require("passport");
		const {
			JWTStrategy
		} = require("@sap/xssec");
		const xsenv = require("@sap/xsenv");
		var hdbext = require("@sap/hdbext");
		var logging = require("@sap/logging");
		var appContext = logging.createAppContext();

		var app = express();
		// Set passport strategy (authentication method) as JWT based on the uaa services
		passport.use("JWT", new JWTStrategy(xsenv.getServices({
			uaa: {
				tag: "xsuaa"
			}
		}).uaa));
		app.use(logging.middleware({
			appContext: appContext
		}));
		app.use(passport.initialize());
		var hanaOptions = xsenv.getServices({
			hana: {
				tag: "hana"
			}
		});
		app.use(
			passport.authenticate("JWT", {
				session: false
			}),
			hdbext.middleware(hanaOptions.hana)
		);
		console.log("Express finished.");
		return app;
	},
	initXSJS: function (app) {
		console.log("Initializing XSJS...");
		var xsjs = require("@sap/xsjs");
		const xsenv = require("@sap/xsenv");
		var options = {
			// anonymous: true, // remove to authenticate calls
			redirectUrl: "/index.xsjs",
			context: {
				base: global.__base,
				env: process.env
			}
		};
		try {
			options = Object.assign(options, xsenv.getServices({
				hana: {
					tag: "hana"
				}
			}));
		} catch (err) {
			console.log("[WARN]", err.message);
		}
		// configure UAA xsjs
		try {
			options = Object.assign(options, xsenv.getServices({
				uaa: {
					tag: "xsuaa"
				}
			}));
		} catch (err) {
			console.log("[WARN]", err.message);
		}
		// configure AuditLog
		try {
			options = Object.assign(options, xsenv.getServices({
				auditLog: {
					tag: "auditlog"
				}
			}));
		} catch (err) {
			console.log("[WARN]", err.message);
		}
		var xsjsApp = xsjs(options);
		app.use(xsjsApp);
		console.log("XSJS finished.");
	}
};
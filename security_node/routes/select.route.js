var express = require("express");
var router = express.Router();
const {
	promisify
} = require('util');
const {
	createConnection
} = require("@sap/hdbext");
const createConnectionProm = promisify(createConnection);
const xsenv = require("@sap/xsenv");
const services = xsenv.getServices({
	hanaConfig: {
		tag: "hana"
	}
});

router.get('/T_Airports', async(req, res, next) => {
	let auth = await req.authInfo.checkLocalScope('READ');
	if (!auth) {
		res.writeHead(403, {
			'Content-Type': 'application/json'
		});
		console.error('[ERROR] User is not authorized.');
		res.send(401, '[ERROR] User is not authorized.');
	}
	try {
		let client = await createConnectionProm(services.hanaConfig);
		let prepareProm = await promisify(client.prepare).bind(client);
		let statement = await prepareProm('SELECT * FROM "tables.T_Airports"');
		let execProm = await promisify(statement.exec).bind(statement);
		let result = await execProm();
		console.log(result);
		res.status(200).send(result);
	} catch (e) {
		console.error(res.status(500).send("[ERROR] " + e));
	}
});

// router.get('/whoAmI', async(req, res, next) => {
// 	let auth = await req.authInfo.checkLocalScope('READ');
// 	if (!auth) {
// 		res.writeHead(403, {
// 			'Content-Type': 'application/json'
// 		});
// 		console.error('[ERROR] User is not authorized.');
// 		res.send(401, '[ERROR] User is not authorized.');
// 	}
// 	try {
// 		let client = await createConnectionProm(services.hanaConfig);
// 		let prepareProm = await promisify(client.prepare).bind(client);
// 		let statement = await prepareProm(`SELECT SESSION_CONTEXT('APPLICATIONUSER') "APPLICATION_USER" FROM "DUMMY`);
// 		let execProm = await promisify(statement.exec).bind(statement);
// 		let result = await execProm();
// 		console.log(result);
// 		res.status(200).send(result);
// 	} catch (e) {
// 		console.error(res.status(500).send("[ERROR] " + e));
// 	}
// });

module.exports = router;
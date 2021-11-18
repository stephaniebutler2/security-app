var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {

});

router.get('/read', async(req, res) => {
	let body = {};
	let auth = await req.authInfo.checkLocalScope('READ');
	if (!auth) {
		body.message = '[ERROR] User is not authorized.';
		body.code = 401;
		body.has = false;
	} else {
		body.message = '[SUCCESS] User has scope READ';
		body.code = 200;
		body.has = true;
	}
	res.send(body.code, body);
});

router.get('/edit', async(req, res) => {
	let body = {};
	let auth = await req.authInfo.checkLocalScope('EDIT');
	if (!auth) {
		body.message = '[ERROR] User is not authorized.';
		body.has = false;
		body.code = 401;
	} else {
		body.message = '[SUCCESS] User has scope EDIT';
		body.has = true;
		body.code = 200;
	}
	res.send(body.code, body);
});

module.exports = router;
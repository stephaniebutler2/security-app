var express = require("express");
var router = express.Router();

router.get('/getLogonName', async(req, res) => {
	res.send(req.authInfo.getLogonName());
});

router.get('/getEmail', async(req, res) => {
	res.send(req.authInfo.getEmail());
});

module.exports = router;
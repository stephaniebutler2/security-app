var express = require("express");
var router = express.Router();
var request = require('request');

// Handle get at path '/'
router.get("/", (req, res) => {
	res.send(200, `Welcome to my application, ${req.user.id}.`);
});

router.get("/ip", (req, res, next) => {
	request("http://httpbin.org/ip", (err, res2, body) => {
		if(err){
			next(err);
		}
		res.write(`Current IP address is: \n`);
		res.write(body);
		res.status(200);
		res.end();
	});
});

module.exports = router;
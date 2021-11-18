var express = require("express");
var router = express.Router();

router.get('/hasAttributes', async(req, res) => {
	res.send(req.authInfo.hasAttributes());
});

router.get('/hasCountry', async(req, res) => {
	var userContext = req.authInfo;
	var result = JSON.stringify({
		userContext: userContext
	});
	res.type("application/json").status(200).send(result);
});

module.exports = router;
var express = require("express");
var router = express.Router();

const version = process.env.VERSION || "v1";

/* Basic handler for this route */
router.use((req, res, next) => {
	console.log(`This is ${version}`);
	console.log(JSON.stringify(req.headers));
	next();
});

router.get("/:id", function(req, res, next) {
	res.send(`${version}`);
});
router.post("/:id", function(req, res, next) {
	res.send(`${version}`);
});

module.exports = router;

var express = require("express");
var router = express.Router();
const _axios = require("axios");

const headInfo = {
	kubeds: "enabled"
};
const axios = _axios.create({
	headers: headInfo
});

/* Basic handler for this route */
router.use((req, res, next) => {
	console.log(JSON.stringify(req.headers));
	next();
});

router.post("/:endpoint/:port/:id", function(req, res, next) {
	console.log(`Request with kubeds: ${headInfo.kubeds} in header`);
	const url = `http://${req.params.endpoint}:${req.params.port}/api/${req.params.id}`;

	axios
		.post(url, req.body)
		.then(response => {})
		.catch(error => {
			console.log(error);
		});
	res.json(req.body);
});

// router.get("/call", (req, res) => {
// 	console.log("log");
// 	res.send("ok");
// });
// router.post("/call", (req, res) => {
// 	console.log("log");
// 	res.json(req.body);
// });
module.exports = router;

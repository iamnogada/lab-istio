var express = require("express");
var router = express.Router();
const _axios = require("axios");

const headInfo = {
	kubeds: "disabled"
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
		.then(response => {
			res.json({
				...req.body,
				message: response.data
			});
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({
				status: "error",
				message: error.message
			});
		});
	// res.json(req.body);
});

module.exports = router;

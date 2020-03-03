var express = require("express");
var router = express.Router();
const axios = require("axios");

// const headInfo = {
// 	kubeds: "disabled"
// };
// const axios = _axios.create({
// 	headers: headInfo
// });

/* Basic handler for this route */
router.use((req, res, next) => {
	console.log(JSON.stringify(req.headers));
	next();
});

router.post("/:version/:endpoint/:port/:id", function(req, res, next) {
	const headers = {
		kubeds: "disabled"
	};

	if ("v2" == req.params.version) {
		headers.kubeds = "enabled";
	}
	console.log(`Request with kubeds: ${headers.kubeds} in header`);

	const url = `http://${req.params.endpoint}:${req.params.port}/api/${req.params.id}`;
	console.log(`Backend endpoint is ${url}`);

	axios
		.post(url, req.body, { headers })
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

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var apiRouter = require("./routes/api");

var app = express();

app.use(
	logger(
		":date[iso] GMT :method :status :response-time ms size: :res[content-length]\t :url",
		{
			skip: function(req, res) {
				return "/health" == req.path;
			}
		}
	)
);

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);

app.get("/health", function(req, res) {
	res.send("ok");
});
module.exports = app;

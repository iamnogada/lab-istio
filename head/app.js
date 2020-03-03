var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var apiv1Router = require("./routes/apiv1");
var apiv2Router = require("./routes/apiv2");

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

app.use("/", indexRouter);
app.use("/api/v1", apiv1Router);
app.use("/api/v2", apiv2Router);

module.exports = app;

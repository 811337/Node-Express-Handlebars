var express = require("express");

var app = express();
var PORT = process.env.PORT || 8000;

// Start server
app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});
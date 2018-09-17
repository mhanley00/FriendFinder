// ______________________________________________________________________________
// DEPENDENCIES - npm packages
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// ______________________________________________________________________________
// EXPRESS - server setup
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var app = express(); //we're making an express server
var PORT = process.env.PORT || 3000;

// Express app will handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ______________________________________________________________________________
//ROUTER - Connecting to .js data in routing folder
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// ______________________________________________________________________________
//LISTENER - start server
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
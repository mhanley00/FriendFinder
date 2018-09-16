// ______________________________________________________________________________
// DEPENDENCIES - npm packages
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// ______________________________________________________________________________
// EXPRESS - app setup
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//think this may have to be on the front end js
var questions = [
    "You can't stand when people make grammar mistakes or misspell words in texts without correcting them.",
    "You are adaptable to new situations and thrive on change.",
    "You love learning new things.",
    "You are active and enjoy spending time outside.",
    "You want to live abroad.",
    "You are a night owl.",
    "Family is important to you.",
    "Staying out until 3am sounds like a blast to you.",
    "Rainy weather is the worst.",
    "Bagels are one of the most magnificent foods in the world."
];
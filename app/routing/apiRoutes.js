// ______________________________________________________________________________
// LOAD DATA - ie survey results
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var friendData = require("../data/friends");
//this is from our friends.js file- don't need .js?

// ______________________________________________________________________________
// ROUTING
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
// ______________________________________________________________________________
// API GET Requests - displays all possible friends in JSON
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

// ______________________________________________________________________________
// API POST Requests
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  app.post("/api/friends", function(req, res) {
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
// * This route will also be used to handle the compatibility logic. 
// ____________________
// DIFFERENCE CALC
// -----–––––––––––––––
//function differenceCalculator (){ >>> this will be the difference between each person's scores
// var difference = friend1.map(function (num, i) {
//     return Math.abs(num - friend2[i]);
//     console.log(difference); 
// });}
//
// differenceCalculator (put new person in here?);


    friendData.push(req.body);
      res.json(true);

  });
}
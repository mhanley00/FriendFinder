// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 
// ______________________________________________________________________________
// DEPENDENCIES
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var path = require("path");

// ______________________________________________________________________________
// ROUTING
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

module.exports = function(app) {
  // HTML GET Requests, a la hot resto
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  app.get("/", function(req, res) {

    // function Candidate(name, photo, scores) { //function to put candidate answers + photo into JSON
    //   this.name = name;
    //   this.photo = photo;
    //   this.scores = scores;
    // }
    //newFriend[0] = new aFriend($(#name), $(#photo), 

    res.redirect("/survey");
  });

  app.get("/survey", function(req, res) {

    // function Candidate(name, photo, scores) { //function to put candidate answers + photo into JSON
    //   this.name = name;
    //   this.photo = photo;
    //   this.scores = scores;
    // }
    //newFriend[0] = new aFriend($(#name), $(#photo), 

    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Default is home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

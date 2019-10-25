# node-express-handlebars
[Site](https://flexsant.github.io/node-express-handlebars/)
## Summary
A restaurant app that allows users to input any type of burger they would like to eat or devour.

## Visual Aids


## User Guides
- The app allows users to input what ever type of hamburger they would like to eat.


## Code Snippet
```Javascript
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devour to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
```
````Javascript
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
````
````Javascript
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
````


## Technologies Used
- Git - version control system to track changes to source code.
- GitHub - hosts repository that can be deployed to GitHub Pages.
- Javascript - allows dynamic interaction between user and computer data entry.
- JQuery - a javascript library that allows for simple yet more diverse and less verbos.
- NODE.js - javascript run-time environment that can be run outside of browser.
- Inquirer - command line user interfaces.
- Sequelize - Capture all the data and store into a table.
- Express - A node package for server hosting.
- MVC - Model, Views, Controller
- Node.js - Backend server.
- jQuery - A library used for server communication.
- HTML - Backbone of the site.
- CSS - For additional styling.


## Learning Points 
- Creating complex and organizing large file trees
- Creating the code that will call the ORM functions using burger specific input for the ORM
- 
## Authors
- Lex Santos - [GitHub](https://github.com/flexsant) | [LinkedIn](https://www.linkedin.com/in/lex-santos-673623194/)

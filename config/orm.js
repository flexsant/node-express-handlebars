// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// Dependencies
var connection = require("./connection.js");
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL
function objToSql(ob) {
    var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
      var value = ob[key];
      //check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations 
        if (typeof value === "string" && value.indexOf(" ") >=0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
  }
  return arr.toString();
}

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        
    }
}
var tableName = "burgers";

var orm = {
    getTodos: function(callback) {
        var s = "SELECT * FROM " + ;

        connection.query(s, function(err, result) {

            callback(result);
        });
    },
}
selectAll()
insertOne()
updateOne()
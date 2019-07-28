var connection = require("../config/connection");
var orm = {
  // all represents key of data containing function
  all: function(tableInput, cb) {
    var tableInput = "burgers";
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      console.long(res);
      cb(res);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Methods that are required:
// selectAll()
// insertOne()
// updateOne()

module.exports = orm;

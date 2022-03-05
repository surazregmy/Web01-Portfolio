const passport = require("passport");
let User = require("../model/user");

// Gets all movies from the Database and renders the page to list all movies.
module.exports.findUserByUsername = async (username) => {
  return User.findOne({
    username: username,
  });
};

// Gets all movies from the Database and renders the page to list all movies.
module.exports.findUserById = (id) => {
  return User.findOne({
    id: id,
  });
};

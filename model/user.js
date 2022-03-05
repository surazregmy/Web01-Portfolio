let mongoose = require("mongoose");

// Create a model class
let userModel = mongoose.Schema(
  {
    name: String,
    username: String,
    password: String,
    email: String,
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", userModel);

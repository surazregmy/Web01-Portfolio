// Suraj Regmi
// student Id : 301217943

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Welcome to Suraj Regmi's Profile" });
});

/* GET About page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Me" });
});

/* GET Projects page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET services page. */
router.get("/contactme", function (req, res, next) {
  res.render("contactme", { title: "Contact Me" });
});

/* save info for contact form. */
router.get("/savecontact", function (req, res, next) {
  //display form value
  res.render("thanks.ejs", { body: req.body });
  return res.redirect("/");
});

module.exports = router;

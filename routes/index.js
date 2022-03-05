// Suraj Regmi
// student Id : 301217943

var express = require("express");
var router = express.Router();
const passport = require("passport");

const flash = require("connect-flash");
const session = require("express-session");
const bcrypt = require("bcrypt");

const initializePassport = require("../config/passport-config");

let loginController = require("../controller/login_controller");
let contactController = require("../controller/contact_controller");

initializePassport(
  passport,
  loginController.findUserByUsername,
  loginController.findUserById
);

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
router.post("/savecontact", function (req, res, next) {
  return res.redirect("/");
});

router.get("/login", checkNotAuthenticated, function (req, res, next) {
  res.render("login", {
    title: "Please login!",
    message: req.flash("authMessage"),
  });
});

router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/contact-list",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/contact-list", checkAuthenticated, contactController.contactList);

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

router.get(
  "/contact-list/edit/:id",
  checkAuthenticated,
  contactController.contactEdit
);
router.post(
  "/contact-list/edit",
  checkAuthenticated,
  contactController.contactUpdate
);

router.get(
  "/contact-list/delete/:id",
  checkAuthenticated,
  contactController.contactDelete
);

module.exports = router;

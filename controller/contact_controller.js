let Contact = require("../model/contact");
// Gets all contacts from the Database and renders the page to list all movies.
module.exports.contactList = function (req, res, next) {
  Contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("contact_list", {
        title: "Contact List",
        contacts: contactList,
      });
    }
  }).sort({ name: 1 });
};

// Get a contact to edit and display it in contact page
module.exports.contactEdit = function (req, res, next) {
  console.log(req);
  Contact.findOne(
    {
      _id: req.params.id,
    },
    (err, contact) => {
      if (err) {
        return console.error(err);
      } else {
        res.render("edit_contact", {
          title: "Edit contact",
          contact: contact,
        });
      }
    }
  );
};

// Get a contact to edit and display it in contact page
module.exports.contactUpdate = function (req, res, next) {
  console.log(req.body);
  Contact.updateOne(
    {
      _id: req.body.id,
    },
    req.body,
    (err, doc) => {
      if (err) {
        return console.error(err);
      } else {
        res.redirect("/contact-list");
      }
    }
  );
};

// Get a contact to edit and display it in contact page
module.exports.contactDelete = function (req, res, next) {
  console.log(req.body);
  Contact.deleteOne(
    {
      _id: req.params.id,
    },
    (err, doc) => {
      if (err) {
        return console.error(err);
      } else {
        res.redirect("/contact-list");
      }
    }
  );
};

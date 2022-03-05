const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getByUserName, getUserById) {
  const authenticateUser = async (req, username, password, done) => {
    const user = await getByUserName(username);
    if (user == null) {
      console.log("no user");
      return done(null, false, req.flash("authMessage", "User not found!"));
    }

    try {
      console.log(password);
      console.log(user.password);
      if (await bcrypt.compare(password, user.password)) {
        console.log("user found");
        return done(null, user);
      } else {
        console.log("passport incorrect");
        return done(
          null,
          false,
          req.flash("authMessage", "Incorrect Password. Please check capsLock!")
        );
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      authenticateUser
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

module.exports = initialize;

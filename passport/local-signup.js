const db = require("../models");
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  console.log([req.body.name, username, password]);
  console.log('line 14');
  const userData = {
    username: username.trim(),
    password: password.trim()
    // username: req.body.name.trim()
  };

  // db.User
  //   .create(userData)
  //   .then(dbModel => done(null))
  //   .catch(err => done(err));

  const newUser = new db.User(userData);
  console.log(['line 27', newUser]);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/registerModel');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = function(passport){
  // Local strategy
  passport.use(new LocalStrategy(function(username, password, done){
    // match username
    let query = { username: username };
    User.findOne(query, function(err, user){
      if(err) throw err;

      if(!user) {
        return done(null, false, { message: 'No user found' });
      }

      // Match password (pay attention on the user.password to be exact.)
      bcrypt.compare(password, user.password, function(err, isMatch){
        if (err) throw err;
        if(isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Wrong password' });
        }
      });
    })
  }));
}
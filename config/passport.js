const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Load User model
const User = require('../models/User');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.SECRETORKEY;

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      // Check for user
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            // Found the user, move on to route
            return done(null, user); // (error, user)
          }
          // Did not find a user
          return done(null, false);
        })
        .catch(error => console.log(error));
    })
  );
};

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/users.models')
    var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PRIVATE_KEY;
//passport pour la sécurité des routes
//passport jwt bech ya9ra token
//passport wehedha pour la sécurité des routes 
module.exports = (passport) => {
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        UserModel.findOne({_id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}
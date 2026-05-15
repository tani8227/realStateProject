import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import db from "../models/index.js";
import { where } from "sequelize";
const User = db.User;

passport.use(new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    async function (email, password, done) {
        try {
            const user = await User.findOne({
                where:
                {
                    email: email,
                }
            });
            if (user) {
                if (user && user.password != password) {
                    return done(false, null);
                } else {
                    return done(false, user);
                }
            } else {
                return done(false, null);
            }
        } catch (error) {
            console.log("error in finding the user");
        }
    }
));


passport.serializeUser((user, done) => {
    return done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findOne({
            where:
            {
                id: id
            }
        });
        return done(null, user);

    } catch (error) {
        console.log("error in finding the user by id");
    }

});



export default passport; 
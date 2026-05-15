import passport from "../../config/passport.js";

const checkAuthentication = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/user/sign-up-page");
    } 
    next();
}

export default checkAuthentication;

import express from "express";
const userRouter = express.Router();
import passport from "../config/passport.js";
import * as userController from "../controllers/user/userController.js";
import checkAuthentication from "../middleWares/passport/checkAuthentication.js";

userRouter.get("/sign-in-page", userController.userSignInPage);
userRouter.get("/sign-up-page", userController.userSignUpPage);
userRouter.post("/sign-up", userController.userSignUp);
userRouter.post("/sign-in", passport.authenticate("local", { failureRedirect: "/user/sign-in-page" }), userController.userSignIn);
userRouter.get("/logout", checkAuthentication, userController.userLogout);


export default userRouter;


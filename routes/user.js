const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js")

////signupform,signup
router.route("/signup")
.get(userController.renderSignupForm)
.post( wrapAsync(userController.signup)); 

////Login
router.route("/login")
.get(userController.renderloginForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local",{
    failureRedirect: "/login",
    failureFlash: true,
}),
userController.login);

//////logout
router.get("/logout",userController.logout)

module.exports = router;
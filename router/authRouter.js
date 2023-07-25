const express = require("express");
const authController = require("../controller/authController");
const viewController = require("../controller/viewController");
const router = express.Router();

router.route("/signup").post(authController.signupUser);

router
  .route("/login")
  .get(viewController.getLoginForm)
  .post(authController.loginUser);
router.route("/logout").get(authController.protect, authController.logOut)
module.exports = router;

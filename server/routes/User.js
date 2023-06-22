const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");

const {
  changePassword,
  login,
  signUp,
  sendOTP,
} = require("../controllers/Auth");

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

router.post("/login", login);
router.post("/signup", signUp);
router.post("./sendOTP", sendOTP);
router.post("./changePassword", auth, changePassword);

router.post("/reset-password-token", resetPasswordToken);
router.post("./reset-password", resetPassword);

module.exports = router;

const { json } = require("express");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

exports.resetPasswordToken = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(403).json({
        success: false,
        message: `Your Email is Not Registered with us`,
      });
    }

    const token = crypto.randomBytes(20).toString("hex");
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );
    console.log({ updatedDetails });
    const url = `http://localhost:3000/update-password/${token}`;

    await mailSender(
      email,
      "Password Reset",
      `Your Link for email verification is ${url}. Please click this url to reset your password.`
    );

    res.json({
      success: true,
      message:
        "Email Sent Successfully, Please Check Your Email to Continue Further",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `Internal Server Error, Please Try Again`,
    });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;

    if (password !== confirmPassword) {
      return res.status(500).json({
        success: false,
        message: `Password Not Matching`,
      });
    }

    if (!password || !confirmPassword) {
      return res.status(500).json({
        success: false,
        message: `All Fields are required`,
      });
    }

    const userDetails = await User.findOne({ token: token });

    if (!userDetails) {
      return res.json({
        success: false,
        message: `Token is Invalid`,
      });
    }

    if (!(userDetails.resetPasswordExpires > Date.now())) {
      return res.json({
        success: false,
        message: `Token is Expired, Regenerate your token`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: `Password Reset Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `Internal Server Error, Please Try Again`,
    });
  }
};

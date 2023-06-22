const { json } = require("express");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");

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

    const token = crypto.randomUUID();
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );

    const url = `http://localhost:3000/update-password/${token}`;

    await mailSender(
      email,
      "Password Reset Link",
      `Password Reset Link: ${token}`
    );

    return res.status(200).json({
      success: true,
      message: `Email sent successfully, Please Check your Email`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).jsoN({
      success: false,
      message: `Internal Server Error, Please Try Again`,
    });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;

    if (!password || !confirmPassword) {
      return (
        res /
        json({
          success: false,
          message: `Password Not Matching`,
        })
      );
    }

    const userDetails = await User.findOne({ token: token });

    if (!userDetails) {
      return res.json({
        success: false,
        message: `Token is Invalid`,
      });
    }

    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.json({
        success: false,
        message: `Token is Expired, Regenerate your token`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.findByIdAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );

    return res.statu(200).json({
      success: true,
      message: `Password Reset Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).jsoN({
      success: false,
      message: `Internal Server Error, Please Try Again`,
    });
  }
};
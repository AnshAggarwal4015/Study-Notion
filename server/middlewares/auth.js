const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is Missing",
      });
    }
    console.log({token})
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Token in not valid",
      });
    }

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: "Something went wrong while validating Token",
    });
  }
};

exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Student") {
      return res.status(401).json({
        success: false,
        message: `This is a Protected Route for Student only`,
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `User Role Cannot be accessed, Please try again`,
    });
  }
};

exports.isInstructor = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Instructor") {
      return res.status(401).json({
        success: false,
        message: `This is a Protected Route for Instructor only`,
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `User Role Cannot be accessed, Please try again`,
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Admin") {
      return res.status(401).json({
        success: false,
        message: `This is a Protected Route for Admin only`,
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `User Role Cannot be accessed, Please try again`,
    });
  }
};

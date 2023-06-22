const express = require("express");
const router = express.Router();

const {
  auth,
  isAdmin,
  isStudent,
  isInstructor,
} = require("../middlewares/auth");

const {
  createCourse,
  getAllCourses,
  getCourseDetails,
} = require("../controllers/Course");

const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReview");

const {
  deleteSection,
  updateSection,
  createSection,
} = require("../controllers/Section");

const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/SubSection");

const {
  createCategory,
  showAllCategory,
  categoryPageDetails,
} = require("../controllers/Category");

router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);

router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategory);
router.post("/categoryPageDetails", categoryPageDetails);

router.post("/addSection", auth, isInstructor, createSection);
router.post("/updateSection", auth, isInstructor, updateSection);
router.post("/deleteSection", auth, isInstructor, deleteSection);

router.post("/addSubSection", auth, isInstructor, createSubSection);
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);

router.post("/createCourse", auth, isInstructor, createCourse);
router.get("/getAllCourses", auth, isInstructor, getAllCourses);
router.post("/getCourseDetails", auth, isInstructor, getCourseDetails);

module.exports = router;

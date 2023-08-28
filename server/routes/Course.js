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
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
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

const {
  updateCourseProgress
} = require("../controllers/courseProgress");

router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);

router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategory);
router.post("/getCategoryPageDetails", categoryPageDetails);

router.post("/addSection", auth, isInstructor, createSection);
router.post("/updateSection", auth, isInstructor, updateSection);
router.post("/deleteSection", auth, isInstructor, deleteSection);

router.post("/addSubSection", auth, isInstructor, createSubSection);
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);

router.post("/createCourse", auth, isInstructor, createCourse);
router.get("/getAllCourses", auth, getAllCourses);
router.post("/editCourse", auth, isInstructor, editCourse);
router.post("/getCourseDetails", getCourseDetails);
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses);
router.delete("/deleteCourse", deleteCourse);
router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

module.exports = router;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { useSelector } from "react-redux";
import IconButton from "../../common/IconButton";
import CoursesTable from "./InstructorCourses/CoursesTable";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";

const MyCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token);
      if (result) {
        setCourses(result);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-9">
        <div className="text-richblack-5 font-medium text-3xl leading-[2.375rem] ">
          My Courses
        </div>
        <IconButton
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconButton>
      </div>
      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  );
};

export default MyCourses;

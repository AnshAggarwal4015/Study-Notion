import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`shadow-customHomePageButton text-center text-base px-6 py-3 rounded-md font-bold
        ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"}
    `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;

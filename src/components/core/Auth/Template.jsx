import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frameImage from "../../../assets/Images/frame.png";

const Template = ({ title, description1, description2, image, formType }) => {
  return (
    <div className="flex flex-row justify-between items-center w-11/12 max-w-[1160px] py-12 mx-auto my-auto gap-x-12 gap-y-0 ">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-3xl">{title}</h1>
        <div className="text-lg text-richblack-100 flex flex-col">
          <div>{description1}</div>
          <div className="font-edu-sa italic text-blue-100">{description2}</div>
        </div>
        {formType === "signup" ? <SignupForm /> : <LoginForm />}
      </div>

      <div className="relative w-11/12 max-w-[450px] ">
        <img
          src={frameImage}
          alt="Patter"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;

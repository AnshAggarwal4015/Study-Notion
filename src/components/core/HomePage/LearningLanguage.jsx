import React from "react";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../HomePage/Button";

const LearningLanguage = () => {
  return (
    <div className="flex flex-col mt-28 mb-[5.62rem] items-center justify-center gap-5">
      <div className="font-semibold text-4xl text-richblack-900 text-center">
        Your swiss knife for <HighlightText text={"learning any language"} />
      </div>
      <div className="font-medium text-base text-center text-richblack-700 mx-auto w-[70%]">
        Using spin making learning multiple languages easy. with 20+ languages
        realistic voice-over, progress tracking, custom schedule and more.
      </div>

      <div className="flex flex-row items-center justify-center mt-12">
        <img
          src={know_your_progress}
          alt="KNowYourProgressImage"
          className="object-contain -mr-32 "
        />
        <img
          src={compare_with_others}
          alt="KNowYourProgressImage"
          className="object-contain"
        />
        <img
          src={plan_your_lesson}
          alt="KNowYourProgressImage"
          className="object-contain -ml-36"
        />
      </div>

      <div className="mt-12 flex items-center justify-center">
        <CTAButton active={true} linkto={"/signup"}>
          Learn More
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguage;

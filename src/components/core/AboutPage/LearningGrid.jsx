import React from "react";
import HighlightText from "../HomePage/HighlightText";
import { LearningGridArray } from "../../../data/LearningGridArray";
import CTAButton from "../../core/HomePage/Button";

const LearningGrid = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 mb-12 mx-auto xl:w-fit w-[350px]">
      {LearningGridArray.map((item, index) => (
        <div
          key={index}
          className={`${
            index === 0 && "bg-richblack-900 xl:col-span-2 xl:h-72"
          } ${
            item.order % 2 === 0
              ? "bg-richblack-700 h-72"
              : "bg-richblack-800 h-72"
          } ${item.order === 3 && "xl:col-start-2"}`}
        >
          {item.order < 0 ? (
            <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
              <div className="text-4xl font-semibold text-richblack-5">
                {item.heading}
                <HighlightText text={item.highlightText} />
              </div>
              <div className="text-base font-medium text-richblack-300">
                {item.description}
              </div>
              <div className="w-fit mt-2">
                <CTAButton active={true} linkto={"/signup"}>
                  {item.BtnText}
                </CTAButton>
              </div>
            </div>
          ) : (
            <div className="p-8 flex flex-col gap-8">
              <h1 className="text-richblack-5 text-lg">{item.heading}</h1>

              <p className="text-richblack-300 font-medium">
                {item.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearningGrid;

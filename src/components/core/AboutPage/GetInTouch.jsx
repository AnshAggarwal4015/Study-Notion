import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const GetInTouch = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-between mx-auto">
      <div className="text-4xl font-semibold tracking-[-0.72px] text-richblack-5">
        Get in Touch
      </div>
      <div className="text-base font-medium text-richblack-300 mt-3">
        We&apos;d love to here for you, Please fill out this form.
      </div>
      <div className="my-8 mx-auto">
        <ContactUsForm />
      </div>
      
    </div>
  );
};

export default GetInTouch;

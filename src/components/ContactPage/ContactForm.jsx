import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <div className="font-semibold text-4xl tracking-[-0.72px] text-richblack-5">
        Got a Idea? We&apos;ve got the skills. Let&apos;s team up
      </div>
      <div className="font-medium text-base mb-8">
      Tell us more about yourself and what you’re got in mind.
      </div>
      <ContactUsForm />
    </div>
  );
};

export default ContactForm;

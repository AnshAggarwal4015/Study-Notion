import React from "react";
import Footer from "../components/common/Footer";
import ContactDetails from "../components/ContactPage/ContactDetails";
import ContactForm from "../components/ContactPage/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col w-11/12 mx-auto max-w-maxContent my-24 gap-14 justify-between mb-">
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>
        <div className="lg:w-[60%] ">
          <ContactForm />
        </div>
      </div>
      <div className="text-center text-4xl text-richblack-5 font-semibold my-10">
        Reviews from other learners
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

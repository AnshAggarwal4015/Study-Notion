import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";
import { contactDetails } from "../../data/contactDetails";

const ContactDetails = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
        {contactDetails.map((item, index) => {
          let Icon = Icon1[item.icon] || Icon2[item.icon] || Icon3[item.icon];
          return (
            <div
              className="flex flex-col gap-0.5 p-3 text-sm text-richblack-200"
              key={index}
            >
              <div className="flex flex-row gap-2.5">
                <Icon size="25" />
                <div className="text-lg text-richblack-5 font-semibold	">
                  {item.heading}
                </div>
              </div>

              <div className="font-medium ml-[35px]">{item.description}</div>
              <div className="font-semibold ml-[35px]">{item.details}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactDetails;

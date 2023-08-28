import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div className="bg-richblack-700">
      <div className="w-11/12 max-w-maxContent flex flex-col justify-between mx-auto  gap-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 text-richblack-5">
          {Stats.map((item, index) => (
            <div className="flex flex-col text-center py-10" key={index}>
              <div className="text-3xl font-bold">{item.count}</div>
              <div className="text-richblack-500 font-semibold text-base">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;

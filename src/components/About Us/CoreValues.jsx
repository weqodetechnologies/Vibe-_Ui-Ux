import React from "react";
import PurpleBox from "../ui/PurpleBox";

import CommunityIcon from "../../assets/Community.svg";
import InnovationIcon from "../../assets/Innovation.svg";
import ExcellenceIcon from "../../assets/Excellence.svg";

function CoreValues() {
  const values = [
    {
      id: 1,
      title: "Community",
      icon: CommunityIcon,
      text: (
        <>
          Building a supportive network<br />where designers learn, grow, and<br /> succeed together.
        </>
      ),
    },
    {
      id: 2,
      title: "Innovation",
      icon: InnovationIcon,
      text: <>Embracing new technologies and<br /> methodologies to stay ahead of <br />industry trends.</>
    },
    {
      id: 3,
      title: "Excellence",
      icon: ExcellenceIcon,
      text: <>Maintaining the highest standards<br /> in education, mentorship and student outcomes.</>
    },
  ];

  return (
    <div className="w-full mt-16">
      {/* FULL WIDTH PURPLE BOX */}
      <div className="w-screen mx-[calc(50%-50vw)]">
        <PurpleBox>
          <div className="py-5 px-6 sm:px-10 text-center">
            {/* Heading */}
            <h2 className="text-white font-semibold text-[28px] sm:text-[32px] md:text-[40px]">
              Our Core Values
            </h2>
            <p className="text-white  text-[15px] sm:text-[17px] md:text-[25px]">
              The Principles That Guide Everything
            </p>

            {/* VALUES GRID */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center px-4"
                >
                  {/* SVG ICON */}
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-15 h-15 mb-5"
                  />

                  <h3 className="text-white font-semibold text-[25px] mb-1">
                    {item.title}
                  </h3>

                  <p className="text-white text-[17px] leading-[1.3] max-w-[260px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PurpleBox>
      </div>
    </div>
  );
}

export default CoreValues;

// src/ui/UIUXcards.jsx
import React from "react";
import BlueBtn from "./BlueBtn";

function Badge({ label }) {
  return (
    <div className="absolute -top-7 right-6 z-10">
      <div className="w-[110px] text-center px-6 py-2 bg-[#FCC174] border-[3px] border-[#383737] rounded-full text-[#1E1E1E] font-bold text-[20px] shadow-md">
        {label}
      </div>
    </div>
  );
}

function Pill({ text }) {
  const baseStyle = {
    height: "30px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    width: "fit-content",
    whiteSpace: "nowrap",
  };

  return (
    <div
      style={baseStyle}
      className="bg-white border-[2px] border-[#757575] rounded-full text-sm font-medium text-[#1E1E1E] shadow-sm"
    >
      {text}
    </div>
  );
}

export default function UIUXCards() {
  const containerWidth = "w-[1144px]";
  const cardWidthClass = "w-[360px]";
  const gapXClass = "gap-x-[30px]";

  const cards = [
    {
      badge: "Basic",
      pills: [{ text: "18–25 Yrs" }, { text: "Beginner Friendly" }],
      titleBlack: "UIUX",
      titleAccent: "Launchpad",
      subtitle: "Your First Step To UI UX",
      points: [
        "3 Months Programme",
        "30+ Assignments",
        "10+ Assig. & Group Projects",
        "Portfolio On Dribble & Behance",
        "Course Completion Certificate",
      ],
    },
    {
      badge: "Pro",
      pills: [{ text: "0 To Hero" }, { text: "For Serious Design Aspirants" }],
      titleBlack: "UIUX",
      titleAccent: "Pro Track",
      subtitle: "From Zero To Expert",
      points: [
        "6 Months Programme",
        "50+ Assignments",
        "2 Case Studies",
        "Mock Interview Sessions",
        "Course Completion Certificate",
      ],
    },
    {
      badge: "Expert",
      pills: [{ text: "Knows UI" }, { text: "Job-Ready Designers" }],
      titleBlack: "Pro",
      titleAccent: "UX",
      subtitle: "The UX Mastery Course",
      points: [
        "3 Months Programme",
        "10+ Assignments",
        "2 Case Studies",
        "Mock Interview Sessions",
        "Course Completion Certificate",
      ],
    },
  ];

  return (
    <div className={`${containerWidth} mx-auto flex items-center justify-center`}>
      <div className={`grid grid-cols-3 ${gapXClass}`}>
        {cards.map((c, i) => (
          <div
            key={i}
            className={`${cardWidthClass} bg-[#FAF3EA] rounded-[18px] shadow-lg 
                        overflow-visible relative px-[24px] pt-[90px] pb-[32px] 
                        flex flex-col`}
          >
            {/* top badge */}
            <Badge label={c.badge} />

            {/* Pills section (top left) */}
            <div className="absolute top-[18px] left-[20px] flex flex-col gap-[8px] z-0 items-start">
              {c.pills.map((p, idx) => (
                <Pill key={idx} text={p.text} />
              ))}
            </div>

            {/* Content section */}
            <div className="text-left text-[#1E1E1E] font-outfit flex-1">
              <h3 className="text-[38px] font-semibold leading-tight">
                {c.titleBlack}{" "}
                <span className="text-[#E8489A]">{c.titleAccent}</span>
              </h3>

              <p className="text-[16px] font-normal mt-1 text-[#2E2E2E]">
                {c.subtitle}
              </p>

              <ul className="mt-4 space-y-2 text-[20px] font-medium max-w-[300px] leading-snug">
                {c.points.map((pt, index) => (
                  <li key={index}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* Button – center & thoda niche */}
            <div className="mt-6 flex justify-center">
              <BlueBtn text="Become A Designer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// src/pages/Sunday.jsx
import React from "react";
import BlueBtn from "../../components/ui/BlueBtn";
import stars from "../../assets/stars.svg";

/* --- Badge --- */
function Badge({ label }) {
  return (
    <div className="absolute -top-7 right-6 z-10">
      <div className="w-[110px] text-center px-6 py-2 bg-[#FCC174] border-[3px] border-[#383737] rounded-full text-[#1E1E1E] font-bold text-[20px] shadow-md">
        {label}
      </div>
    </div>
  );
}

/* --- Pill (smaller) --- */
function Pill({ text }) {
  return (
    <div className="inline-flex items-center justify-center bg-white border-[2px] border-[#757575] rounded-full text-xs font-medium text-[#1E1E1E] shadow-sm px-3 py-1 w-fit">
      {text}
    </div>
  );
}

/* --- Left: Explorer Card --- */
function ExplorerCard() {
  return (
    <div className="relative bg-[#FFF6EC] w-[360px] rounded-[18px] shadow-lg overflow-visible">
      <Badge label="Basic" />

      {/* Pills section */}
      <div className="pt-3 px-6">
        <div className="flex flex-col gap-3">
          <Pill text={`4 Sunday's`} />
          <Pill text="Explore The Career" />
        </div>
      </div>

      {/* Content section: use flex-col + justify-between so button stays at bottom */}
      <div
        className="px-6 pt-4 pb-6 text-left text-[#1E1E1E] flex flex-col justify-between"
        style={{ minHeight: 420 }} // controls spacing so button sits lower
      >
        <div>
          <h3 className="text-[36px] font-semibold leading-tight font-outfit">
            UIUX <span className="text-[#E8489A]">Explorer Batch</span>
          </h3>
          <p className="text-[15px] font-normal mt-1 text-[#2E2E2E] font-outfit">
            Exposure Of UIUX
          </p>

          <ul className="mt-4 space-y-2 text-[18px] font-medium text-[#1E1E1E] font-outfit max-w-[300px] leading-snug">
            <li>2 Sundays Programme</li>
            <li>3+ Hours Session</li>
            <li>Offline Session + Online Sessions</li>
            <li>Weekly Assignments</li>
            <li>Crash Course Certificate</li>
          </ul>
        </div>

        {/* Button block pinned to bottom via justify-between; extra top margin removed */}
        <div className="mt-6">
          <BlueBtn text="Become A Designer" />
        </div>
      </div>
    </div>
  );
}

/* --- Right: Testimonial Card --- */
function TestimonialCard() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <img src={stars} alt="stars" className="w-[300px] mb-6 object-contain" />

      <div
        className="bg-white rounded-[14px] p-6 shadow-lg"
        style={{ border: "3px solid rgba(255,214,79,0.95)", width: 320 }}
      >
        <div className="flex items-start gap-4">
          <div className="w-[44px] h-[44px] rounded-full bg-[#F57EB6] flex items-center justify-center text-white text-2xl font-bold">
            “
          </div>
          <div className="flex-1">
            <p className="font-outfit font-semibold text-[16px] text-[#1E1E1E] leading-snug">
              In Just 4 Sundays, The Mentorship Cleared My Basics And Gave Me Real
              Clarity About UI/UX.
            </p>

            <div className="mt-4">
              <p className="text-[#FFD64F] mb-1">★★★★★</p>
              <p className="text-[#E8489A] font-outfit font-semibold">
                Aishwarya Patil
              </p>
              <p className="text-[#383737] text-sm">B.Tech Student, Nagpur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Page Layout --- */
export default function Sunday() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-outfit font-semibold text-[46px] text-[#FFFFFF] leading-tight">
            Just Exploring? <br />
            Try UIUX In Our{" "}
            <span className="text-[#FCC174]">4-Sunday Batch.</span>
          </p>
        </div>

        {/* Row with both cards */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-[55px]">
          <ExplorerCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}

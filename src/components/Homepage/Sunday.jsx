// src/pages/Sunday.jsx
import React from "react";
import BlueBtn from "../../components/ui/BlueBtn";
import stars from "../../assets/stars.svg";
import pinkQuote from "../../assets/pinkquote.svg";

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
      <div className="pt-4 px-5">
        <div className="flex flex-col gap-1">
          <Pill text={`4 Sunday's`} />
          <Pill text="Explore The Career" />
        </div>
      </div>

      {/* Content section */}
      <div
        className="px-6 pt-4 pb-6 text-left text-[#1E1E1E] flex flex-col justify-between"
        style={{ minHeight: 390 }}
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

        <div className="mt-2">
          <BlueBtn text="Become A Designer" />
        </div>
      </div>
    </div>
  );
}

/* --- Right: Testimonial Card — matched to Figma (298 x 369, padding L19 R18) --- */
function TestimonialCard() {
  return (
    <div className="flex flex-col items-center">
      {/* decorative stars above (optional) */}
      <img src={stars} alt="stars" className="w-[300px] mb-62object-contain" />

      <div
        className="relative bg-white rounded-[12px] shadow-lg mt-[55px]"
        style={{
          width: 250,
          height: 300,
          boxSizing: "border-box",
          paddingTop: 29,
          paddingLeft: 20,
          paddingRight: 18,
          paddingBottom: 18,
          border: "3px solid rgba(255,214,79,0.98)",
          borderRadius: 12,
          overflow: "visible",
        }}
      >
        {/* pink circular quote icon */}
        <img
          src={pinkQuote}
          alt="quote"
          style={{
            position: "absolute",
            left: 20,
            top: 18,
            width: 68,
            height: 68,
            zIndex: 40,
            background: "transparent",
          }}
        />

        {/* Content (LEFT ALIGNED NOW) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            textAlign: "left", // ← THIS MAKES EVERYTHING LEFT ALIGNED
            alignItems: "flex-start", // ← ensures items stick to left
          }}
        >
          {/* LEFT ALIGNED PARAGRAPH */}
          <p
            className="font-outfit font-semibold text-[#1E1E1E] text-left"
            style={{
              fontSize: 18,
              lineHeight: 1.38,
              margin: 0,
              maxWidth: 260,
              marginTop: 60,
            }}
          >
            In Just 4 Sundays, The Mentorship Cleared My Basics And Gave Me Real
            Clarity About UI/UX.
          </p>

          {/* stars row - left aligned */}
          <div style={{ color: "#FFD64F", fontSize: 14 }}>★★★★★</div>

          {/* Name (left) */}
          <div
            style={{
              color: "#E8489A",
              fontWeight: 800,
              fontSize: 16,
              marginTop: -5, // reduced ↓↓↓
              marginBottom: 0,
            }}
          >
            Aishwarya Patil
          </div>

          {/* Role */}
          <div
            style={{
              color: "#383737",
              fontSize: 13,
              marginTop: -5, // removed extra spacing
            }}
          >
            B.Tech Student, Nagpur
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
        <div className="flex flex-col md:flex-row items-start justify-center gap-[200px]">
          <ExplorerCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}

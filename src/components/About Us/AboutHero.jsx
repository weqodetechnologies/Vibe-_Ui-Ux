// src/components/AboutHero.jsx
import React from "react";
import BlueBtn from "../ui/BlueBtn";
import LapGirl from "../../assets/lapgirl2.svg"; // ladki ka SVG

function AboutHero() {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6">
      {/* Heading */}
      <h1
        className="font-semibold text-white leading-[1.05] max-w-6xl 
                   text-3xl sm:text-4xl md:text-[50px] tracking-tight 
                   z-10 mt-16 sm:mt-20 text-center mx-auto"
      >
        Master UI/UX Design:{" "}
        <span className="text-[#FCC174] font-semibold mt-2">
          From Ideas to Impact
        </span>
      </h1>

      {/* Subheading */}
      <p
        className="mt-4 sm:mt-5 text-gray-300 
                   max-w-3xl mx-auto 
                   text-[14px] sm:text-[16px] md:text-[20px]
                   text-center leading-[1.4]"
      >
        Learn to craft intuitive interfaces, engaging experiences,
        <br className="hidden sm:block" />
        <span className="sm:ml-1">
          and user-centered designs that leave a mark.
        </span>
      </p>

      {/* Buttons */}
      <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 z-10 justify-center">
        <button
          className="group px-7 sm:px-8 py-3 rounded-full border-2 border-white 
                     text-white text-[15px] sm:text-[16px] font-medium hover:bg-white 
                     hover:text-[#383737] transition duration-300 
                     flex items-center gap-2"
        >
          Explore Courses
          <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>

        <BlueBtn text="Join Demo" />
      </div>

      {/* -------- Ladki + Floating Cards Section -------- */}
      <section className="w-full flex justify-center mt-10 sm:mt-14">
        <div
          className="
            relative 
            w-full 
            max-w-[1300px] 
            mx-auto 
            h-[320px] sm:h-[380px] md:h-[400px]
          "
        >
          {/* CENTER GIRL */}
          <img
            src={LapGirl}
            alt="Vibe UIUX character"
            className="
              absolute z-20
              left-1/2 -translate-x-1/2
              bottom-0
              h-[210px] sm:h-[270px] md:h-[340px] lg:h-[410px]
              w-auto
              object-contain
            "
          />

          {/* TOP-LEFT CARD */}
          <div
            className="
              absolute
              bg-white 
              rounded-[18px] 
              shadow-[0_14px_30px_rgba(0,0,0,0.18)] 
              flex flex-col justify-between
              left-3 top-3
              sm:left-6 sm:top-5
              md:left-10 md:top-5
              w-[220px] h-[80px]
              sm:w-[270px] sm:h-[90px]
              md:w-[340px] md:h-[100px]
              px-3 sm:px-4 py-2.5 sm:py-3
            "
          >
            <div className="flex justify-between items-start">
              <p className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold text-[#2B2B2B]">
                Introduction
              </p>
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#4E98FF]" />
            </div>

            <div className="mt-2 space-y-2">
              <div className="w-1/5 h-[5px] rounded-full bg-[#D9D9D9]" />
              <div className="w-2/3 h-[5px] rounded-full bg-[#D9D9D9]" />
              <div className="w-full h-[5px] rounded-full bg-[#4E98FF]" />
            </div>
          </div>

          {/* TOP-RIGHT SMALL CARD */}
          <div
            className="
              absolute 
              bg-white 
              rounded-[18px] 
              shadow-[0_14px_30px_rgba(0,0,0,0.18)] 
              flex items-start justify-center
              right-4 top-6
              sm:right-10 sm:top-6
              md:right-[300px] md:top-6
              w-[70px] h-[90px]
              sm:w-[80px] sm:h-[100px]
              pt-3
            "
          >
            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#4E98FF]" />
          </div>

          {/* RIGHT MIDDLE LONG CARD */}
          <div
            className="
              absolute 
              bg-white 
              rounded-[18px] 
              shadow-[0_18px_40px_rgba(0,0,0,0.2)] 
              flex flex-col justify-between
              right-3 top-[180px]
              sm:right-8 sm:top-[200px]
              md:right-[85px] md:top-[250px]
              w-[260px] h-[90px]
              sm:w-[290px] sm:h-[100px]
              md:w-[320px] md:h-[100px]
              px-4 py-2.5 sm:px-5 sm:py-3
            "
          >
            <p className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-[#555] text-left">
              The Best Place For Application.
            </p>

            <div className="mt-2 space-y-2">
              <div className="w-1/4 h-[5px] rounded-full bg-[#A6ACB1]" />
              <div className="w-full h-[5px] rounded-full bg-[#A6ACB1]" />
              <div className="w-full h-[5px] rounded-full bg-[#4E98FF]" />
            </div>
          </div>

          {/* BOTTOM-LEFT CARD */}
          <div
            className="
              absolute 
              bg-white 
              rounded-[22px] 
              shadow-[0_18px_40px_rgba(0,0,0,0.22)] 
              flex flex-col
              left-4 bottom-4
              sm:left-10 sm:bottom-6
              md:left-[210px] md:bottom-[60px]
              w-[120px] h-[120px]
              sm:w-[130px] sm:h-[130px]
              px-3.5 py-3.5
            "
          >
            {/* Avatar circle — LEFT aligned */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D9D9D9]" />

            {/* Lines — all LEFT aligned */}
            <div className="mt-3 space-y-2 w-full">
              <div className="w-full h-[6px] rounded-full bg-[#D9D9D9]" />
              <div className="w-full h-[6px] rounded-full bg-[#D9D9D9]" />
              <div className="w-full h-[6px] rounded-full bg-[#D9D9D9]" />

              {/* Blue line — also left aligned */}
              <div className="w-3/5 h-[7px] rounded-full bg-[#4E98FF]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutHero;

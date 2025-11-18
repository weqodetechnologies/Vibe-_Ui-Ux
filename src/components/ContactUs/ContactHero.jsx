import React from "react";
import BlueBtn from "../ui/BlueBtn";
import lapgirl from "../../assets/lapgirl3.svg";

function ContactHero() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Heading */}
      <h1
        className="font-semibold text-white leading-[1.05] mt-15
        max-w-6xl text-3xl sm:text-4xl md:text-[40px] tracking-tight"
      >
        Connecting You to What <span className="text-[#FCC174]">Matters</span>{" "}
        Most
      </h1>

      {/* Subheading */}
      <p className="mt-2 text-gray-300 max-w-3xl text-[16px] sm:text-[18px] md:text-[20px]">
        Find us, reach us, and explore our services with ease.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          className="group px-6 py-2 rounded-full border-2 border-white 
          text-white text-[16px] font-medium hover:bg-white hover:text-[#383737] 
          transition flex items-center gap-2"
        >
          Explore Courses
          <span className="text-xl group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
        <BlueBtn text="Join Demo" />
      </div>

      {/* ============ Girl + Quote Boxes (Figma sizes) ============ */}
      <div className="w-full flex justify-center items-center mt-20">
        <div className="flex items-center justify-center gap-[100px]">
          {/* LEFT BOX - 290 x 208 */}
          <div className="bg-white w-[250px] h-[190px] rounded-[26px] shadow-lg flex items-center justify-center px-6 mt-[-180px] ml-[-10px]">
            <p className="text-black font-outfit font-semibold text-[24px] leading-snug text-center ">
              “Wireframes are
              <br />
              blueprints for
              <br />
              emotions.”
            </p>
          </div>

          {/* CENTER GIRL */}
          <img
            src={lapgirl}
            alt="lap girl"
            className="h-[380px] w-auto select-none"
          />

          {/* RIGHT BOX - 290 x 208 */}
          <div className="bg-white w-[250px] h-[190px] rounded-[26px] shadow-lg flex items-center justify-center px-6 mt-[180px] ml-[10px]">
            <p className="text-black font-outfit font-semibold text-[24px] leading-snug text-center">
              “Good UI catches the eye, great UX wins the heart.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;

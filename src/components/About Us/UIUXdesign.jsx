import React from 'react'
import Abtimg1 from "../../assets/Abtimg1.svg";

function UIUXdesign() {
  return (
    <div className="w-full flex flex-col items-center text-center">

      {/* MAIN HEADING */}
      <h2 className="text-[#FCC174] font-semibold text-[28px] sm:text-[32px] md:text-[36px] mt-[100px]">
        About Vibe UI/UX Design
      </h2>

      {/* SUBHEADING */}
      <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[22px] mt-2 max-w-2xl">
        Design Beyond Aesthetics — Craft Experiences<br />That Connect.
      </p>

      {/* ABOUT US SECTION */}
      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-16">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch text-left">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2 text-white font-outfit">
            <h2 className="text-[#FCC174] font-semibold text-[28px] sm:text-[32px] md:text-[36px]">
              About Us
            </h2>

            <p className="mt-4 text-[14px] sm:text-[15px] md:text-[20px] leading-[1.2] text-gray-200">
              Founded with a mission to nurture creative<br/> thinkers and problem
              solvers, Vibe UI/UX <br/>Academy bridges the gap between design<br/>
              education and real-world practice. Through <br/>hands-on projects, live
              mentorship, and <br/>research-driven learning, students gain the<br/>
              confidence to design intuitive, impactful, and<br/> accessible digital
              products.
            </p>

            <p className="mt-5 text-[14px] sm:text-[15px] md:text-[20px] leading-[1.3] text-gray-200">
              From user research to high-fidelity prototyping,<br/> every module is
              crafted to help you think <br/>critically, design empathetically, and
              build a<br/> portfolio that speaks for itself.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[520px] rounded-[32px] overflow-hidden">
              <img
                src={Abtimg1}
                alt="About section"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default UIUXdesign;

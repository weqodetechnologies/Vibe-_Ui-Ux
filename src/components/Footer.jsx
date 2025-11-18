// src/components/Footer.jsx

import React from "react";
import {
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
  PhoneIcon,
  MailIcon,
  LocationIcon,
} from "./ui/Icons";
import BlueBtn from "./ui/BlueBtn";
import logo from "../assets/logo.svg";
import FadingCircle from "./ui/FadingCircle";

export default function Footer() {
  const BOTTOM_LEFT_SIZE = 400;
  const TOP_RIGHT_SIZE = 290;

  return (
    <div className="relative mt-20">
      {/* PURPLE CARD */}
      <div
        className="py-16 md:py-12 relative overflow-hidden"
        style={{
          backgroundColor: "#5835D2",
          width: "99.5vw",
          marginLeft: "calc(50% - 50vw)",
          borderRadius: "36px",
        }}
      >
        {/* ---------------------- CIRCLES ---------------------- */}

        {/* BOTTOM LEFT CIRCLE */}
        <div
          className="absolute pointer-events-none select-none"
          style={{
            bottom: -BOTTOM_LEFT_SIZE / 2,
            left: -BOTTOM_LEFT_SIZE / 2.5,
          }}
        >
          <FadingCircle
            size={BOTTOM_LEFT_SIZE}
            outerOpacity={0.08}
            middleOpacity={0.08}
            innerOpacity={0.05}
          />
        </div>

        {/* TOP RIGHT CIRCLE */}
        <div
          className="absolute pointer-events-none select-none"
          style={{
            top: -TOP_RIGHT_SIZE / 2,
            right: -TOP_RIGHT_SIZE / 2,
          }}
        >
          <FadingCircle
            size={TOP_RIGHT_SIZE}
             outerOpacity={0.08}
            middleOpacity={0.08}
            innerOpacity={0.05}
          />
        </div>

        {/* ---------------------- CONTENT ---------------------- */}
        <div className="max-w-[1440px] mx-auto px-8 md:px-14">
          <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-28">
            
            {/* LEFT SECTION */}
            <div className="w-full md:w-1/3 text-left">

              {/* LOGO */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={logo}
                  className="w-14 h-14 md:w-16 md:h-16"
                  alt="logo"
                />
                <div className="font-semibold text-[24px] md:text-[28px] text-white leading-[32px]">
                  Vibe UIUX <br /> Academy
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-white text-[16px] md:text-[18px] leading-[28px] opacity-95 max-w-[430px]">
                At Vibe UI/UX Academy, we believe anyone can design their
                future. Our courses combine creativity, problem-solving, and
                mentorship to help students explore, learn, and build a career
                in design.
              </p>

              {/* FOLLOW */}
              <div className="mt-10 text-white font-semibold text-[16px]">
                Follow Us:
              </div>

              <div className="flex items-center gap-4 mt-3">
                <LinkedInIcon size={34} />
                <InstagramIcon size={34} />
                <TwitterIcon size={34} />
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="w-full md:w-1/4 text-left">
              <div className="text-white font-bold text-[20px] mb-5">
                Navigation
              </div>

              <div className="flex flex-col gap-3 text-white text-[16px] opacity-95">
                <button className="hover:opacity-100 text-left">Home</button>
                <button className="hover:opacity-100 text-left">Courses</button>
                <button className="hover:opacity-100 text-left">About</button>
                <button className="hover:opacity-100 text-left">Blogs</button>
                <button className="hover:opacity-100 text-left">Contact us</button>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="w-full md:w-1/3 text-left">
              <div className="text-white font-bold text-[20px] mb-5">
                Join Us
              </div>

              {/* EMAIL INPUT */}
              <div className="flex items-center bg-white rounded-full px-4 py-1 w-full md:w-[420px] shadow-md">
                <input
                  placeholder="Enter Your Email"
                  className="flex-1 outline-none text-[#333] text-[15px] md:text-[16px]"
                />
                <div className="ml-3">
                  <BlueBtn text="Join" />
                </div>
              </div>

              {/* PHONE */}
              <div className="mt-8 flex items-start gap-4">
                <PhoneIcon size={24} />
                <div>
                  <div className="font-bold text-white text-[16px]">Phone</div>
                  <div className="text-white opacity-90 text-[15px]">
                    +91 12345 67890
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="mt-5 flex items-start gap-4">
                <MailIcon size={24} />
                <div>
                  <div className="font-bold text-white text-[16px]">Email</div>
                  <div className="text-white opacity-90 text-[15px]">
                    info@weqodetech.com
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="mt-5 flex items-start gap-4">
                <LocationIcon size={24} />
                <div className="text-white opacity-90 text-[15px]">
                  <div className="font-bold">Head Office</div>
                  Plot No.74, WeQode Technologies,
                  <br />
                  Jaiprakash Nagar, Nagpur
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* END CONTENT */}
      </div>
    </div>
  );
}

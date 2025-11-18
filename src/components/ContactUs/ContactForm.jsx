// src/components/Contact.jsx
import React from "react";
import phoneIcon from "../../assets/phone.svg";
import mailIcon from "../../assets/mail.svg";
import locationIcon from "../../assets/location.svg";

export default function ContactForm() {
  return (
    <div className="w-full flex flex-col items-center mt-16 px-4 md:px-6 lg:px-8 font-outfit">
      {/* TOP HEADING */}
      <h2 className="text-[#FFC86B] text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-center">
        Let’s Connect With Us
      </h2>
      <p className="text-gray-300 text-center mt-2 max-w-xl text-[14px] sm:text-[19px] font-medium">
        Find us, reach us, and explore our
        <br /> Courses with ease.
      </p>

      {/* MAIN TWO-COLUMN WRAP */}
      <div className="mt-10 w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center">
        {/* LEFT PURPLE CARD */}
        <div
          className="
            w-full md:w-[550px] md:h-[650px]
            rounded-[26px] shadow-lg text-left text-white
            relative overflow-hidden
            px-[48px] py-[70px]
          "
          style={{
            background: "#5835D2",
          }}
        >
          {/* Heading */}
          <h3 className="text-[35px] font-semibold leading-[40px] mb-[50px]">
            Contact Information
          </h3>

          {/* Content container */}
          <div className="max-w-[408px] space-y-[48px]">
            {/* PHONE */}
            <div className="flex gap-4 items-start">
              <img src={phoneIcon} className="w-[32px] h-[32px] mt-[4px]" />

              <div>
                <p className="text-[28px] font-semibold leading-[32px]">
                  Phone
                </p>
                <p className="text-[16px] leading-[26px] opacity-80 mt-[4px]">
                  +91 12345 67890
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 items-start">
              <img src={mailIcon} className="w-[32px] h-[32px] mt-[4px]" />

              <div>
                <p className="text-[28px] font-semibold leading-[32px]">
                  Email
                </p>
                <p className="text-[16px] leading-[26px] opacity-80 mt-[4px]">
                  Info@Weqodetech.Com
                </p>
              </div>
            </div>

            {/* HEAD OFFICE */}
            <div className="flex gap-4 items-start">
              <img src={locationIcon} className="w-[32px] h-[32px] mt-[4px]" />

              <div>
                <p className="text-[28px] font-semibold leading-[32px]">
                  Head Office
                </p>

                <p className="text-[16px] leading-[26px] opacity-80 mt-[4px]">
                  WeQode Technologies, Jaiprakash
                  <br /> Nagar, Nagpur
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD – Figma style */}
        {/* RIGHT FORM CARD – Updated */}
        <div
          className="
    w-full md:w-[550px] md:h-[650px]
    bg-white rounded-[26px] border-[4px] border-[#FFD505]
    shadow-lg px-8 py-8 flex flex-col justify-between
  "
        >
          <form className="flex flex-col justify-between h-full">
            {/* FIELDS WRAP */}
            <div className="space-y-[22px]">
              {/* NAME */}
              <div className="flex flex-col">
                <label className="text-[18px] font-semibold text-left text-[#000000] mb-[6px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="
            w-full h-[48px] rounded-[10px]
            border border-[#CFCFCF]
            px-3 text-[18px] text-[#555555]
            placeholder:text-[#B5B5B5]
            outline-none
            focus:border-[#4E98FF]
          "
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col">
                <label className="text-[18px] font-semibold text-left text-[#000000] mb-[6px]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="
            w-full h-[48px] rounded-[10px]
            border border-[#CFCFCF]
            px-3 text-[18px] text-[#555555]
            placeholder:text-[#B5B5B5]
            outline-none
            focus:border-[#4E98FF]
          "
                />
              </div>

              {/* PHONE */}
              <div className="flex flex-col">
                <label className="text-[18px] font-semibold text-left text-[#000000] mb-[6px]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className="
            w-full h-[48px] rounded-[10px]
            border border-[#CFCFCF]
            px-3 text-[18px] text-[#555555]
            placeholder:text-[#B5B5B5]
            outline-none
            focus:border-[#4E98FF]
          "
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col">
                <label className="text-[18px] font-semibold text-left text-[#000000] mb-[6px]">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter Your Message"
                  className="
            w-full h-[110px] rounded-[10px]
            border border-[#CFCFCF]
            p-3 text-[18px] text-[#555555]
            placeholder:text-[#B5B5B5]
            outline-none resize-none
            focus:border-[#4E98FF]
          "
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="mt-6 w-full rounded-full py-3 text-white font-semibold text-[16px] shadow-md"
              style={{
                background:
                  "linear-gradient(90deg, #4E98FF 0%, #629CFF 50%, #4E98FF 100%)",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// src/components/Homepage/Unlock.jsx
import React from "react";
import mascot from "../../assets/unlock-girl.svg";
import BlueBtn from "../ui/BlueBtn";

export default function Unlock() {
  return (
    <div className="w-full flex justify-center px-4 mt-12">
      <div
        className="
          relative
          flex flex-col md:flex-row
          md:items-center
          justify-between
          rounded-[30px]
          overflow-hidden
          shadow-lg
        "
        style={{
          width: "98.6%",
          maxWidth: 1250,        // Figma width
          height: "400px",           // Figma height
          padding: "72px 80px",      // approx Figma inner padding
          background: "linear-gradient(90deg, #FFB658 47%, #C46E00 100%)",
        }}
      >
        {/* LEFT TEXT */}
        <div className="font-outfit text-left max-w-xl">
          <h3 className="text-[36px] leading-tight font-semibold text-black">
            Unlock the Future of Learning
          </h3>

          <p className="mt-4 text-[20px] leading-relaxed text-[#383737] font-medium">
            Attend a free demo session to explore our course structure,
            live projects, and internship opportunities.
          </p>

          <div className="mt-8">
            <BlueBtn text="Join Demo" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-shrink-0 flex justify-center md:justify-end items-end mt-10 md:mt-0 md:ml-10">
          <img
            src={mascot}
            alt="Vibe UIUX mascot"
            className="block"
            style={{
              height: 400, // 490 height - top/bottom padding ke hisaab se
              objectFit: "contain",
              filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.25))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

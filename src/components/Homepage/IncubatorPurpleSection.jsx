// src/components/Homepage/IncubatorPurpleSection.jsx
import React from "react";
import goldCoins from "../../assets/goldcoins.svg";
import silverCoins from "../../assets/silvercoins.svg";
import FixedStars from "./FixedStars";
import CornerParticles from "./CornerParticles"; // your CornerWaves code placed here

export default function IncubatorPurpleSection() {
  return (
    <div className="w-full flex justify-center mt-6 px-6 flex-col items-center">
      {/* Purple Box */}
      <div
        className="bg-[#4E21C6] rounded-[36px] overflow-hidden relative group"
        style={{
          padding: "64px 72px",
          minHeight: 560,
          boxSizing: "border-box",
          width: "75vw",
          maxWidth: "none",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        {/* Overlays: corner waves (CornerParticles) + stars */}
        <CornerParticles />
        <FixedStars />

        <div className="relative w-full h-full flex items-start justify-between overflow-visible">
          {/* LEFT CONTENT */}
          <div
            className="font-outfit pr-10 text-left"
            style={{ marginTop: 6, maxWidth: 760 }}
          >
            {/* Heading */}
            <h1
              className="text-white font-semibold"
              style={{
                fontSize: 42,
                lineHeight: 1.3,
                margin: 0,
                letterSpacing: -0.3,
              }}
            >
              Compete, impress the juries, and watch your idea go live, we’ll
              develop it fully, Prize worth{" "}
              <span
                style={{
                  color: "#DFC014",
                  fontWeight: 700,
                }}
              >
                ₹1,00,000.
              </span>
              <br />
              Only for Vibe Academy students.
            </h1>

            {/* DESCRIPTION */}
            <p
              className="text-white/80 mt-6"
              style={{
                fontSize: 18,
                maxWidth: 750,
                lineHeight: 1.45,
              }}
            >
              **During their academic journey, students will create and present
              case studies to a<br /> jury. If selected, the projects will be
              developed into full apps with our support in<br /> launching their
              startups.
            </p>

            {/* Button */}
            <div className="mt-8">
              <button
                className="rounded-full inline-flex items-center justify-center"
                style={{
                  background: "#FFD43B",
                  padding: "14px 34px",
                  fontWeight: 700,
                  color: "#333333",
                  border: "none",
                  cursor: "pointer",
                  boxShadow:
                    "inset 0 -4px 6px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.1s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "inset 0 -4px 6px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "inset 0 -4px 6px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.15)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "translateY(2px)";
                  e.currentTarget.style.boxShadow =
                    "inset 0 -2px 4px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "inset 0 -4px 6px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.2)";
                }}
              >
                Join the Program
              </button>
            </div>
          </div>

          {/* RIGHT SIDE COINS (UNCHANGED) */}
          <div className="relative w-5/12 min-w-[320px] flex justify-end items-end">
            <img
              src={goldCoins}
              alt="gold coins"
              className="pointer-events-none z-20"
              style={{
                position: "absolute",
                top: 150,
                right: 8,
                bottom: -325,
                width: 320,
              }}
            />

            <img
              src={silverCoins}
              alt="silver coins"
              className="pointer-events-none z-30"
              style={{
                position: "absolute",
                left: 40,
                top: 120,
                width: 320,
                opacity: 1,
              }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

import React from "react";

import BlueBtn from "../ui/BlueBtn";
import girl from "../../assets/lapgirl.svg";
import star1 from "../../assets/star1.svg";
import star2 from "../../assets/star2.svg";

const stickers = [
  // Center girl
  { id: "girl", src: girl, left: 260, top: -30, w: 290, h: 410, alt: "blog-girl", }, 

  // Stars around her
  {
    id: "star1",
    src: star1,
    left: 30,
    top: -40,
    w: 32,
    h: 32,
    alt: "star1-top-left",
  },
  {
    id: "star2",
    src: star1,
    left: 160,
    top: 40,
    w: 15,
    h: 22,
    alt: "star1-top-left",
  },
  {
    id: "star3",
    src: star2,
    left: -80,
    top: 110,
    w: 18,
    h: 18,
    alt: "star2-top-right",
  },
  {
    id: "star4",
    src: star1,
    left: 80,
    top: 110,
    w: 37,
    h: 39,
    alt: "star1-mid-left",
  },
  {
    id: "star5",
    src: star2,
    left: 130,
    top: 300,
    w: 40,
    h: 40,
    alt: "star2-mid-right",
  },
  {
    id: "star6",
    src: star1,
    left: -120,
    top: 300,
    w: 14,
    h: 14,
    alt: "star1-bottom-left",
  },
  {
    id: "star7",
    src: star2,
    left: 600,
    top: 140,
    w: 40,
    h: 40,
    alt: "star2-bottom-right",
  },

{
    id: "star8",
    src: star1,
    left: 580,
    top: 10,
    w: 42,
    h: 42,
    alt: "star1-mid-left",
  },

   {
    id: "star7",
    src: star2,
    left: 820,
    top: -30,
    w: 70,
    h: 70,
    alt: "star2-bottom-right",
  },
   {
    id: "star7",
    src: star2,
    left: 840,
    top: 100,
    w: 20,
    h: 20,
    alt: "star2-bottom-right",
  },
  {
    id: "star8",
    src: star1,
    left: 700,
    top: 300,
    w: 32,
    h: 32,
    alt: "star1-mid-left",
  },
];

const baseStickerStyle = {
  position: "absolute",
  objectFit: "contain",
  zIndex: 5,
  pointerEvents: "none",
};

function Bloghero() {
  return (
    <div className="relative">
      <h1 className="font-semibold text-white leading-[1.3] max-w-6xl text-3xl sm:text-4xl md:text-[49px] tracking-tight md:whitespace-nowrap z-10 mt-20 text-center mx-auto">
        Discover Fresh Ideas, Trends, and Perspectives <br />
        in{" "}
        <span className="text-[#FCC174] font-semibold mt-2">UI/UX Design</span>
      </h1>

      <p
        className="mt-6 text-gray-300 max-w-3xl
                   text-[14px] sm:text-[16px] md:text-[24px]
                   md:whitespace-nowrap z-10 text-center mx-auto"
      >
        Dive deeper into UI/UX strategies, design stories, and real-world case
        studies.{" "}
      </p>

      {/* Buttons row */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 z-10 justify-center">
        <button className="group px-8 py-3 rounded-full border-2 border-white text-white text-[16px] font-medium hover:bg-white hover:text-[#383737] transition duration-300 flex items-center gap-2">
          Explore Courses{" "}
          <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
        {/* Blue button using global component */}
        <BlueBtn text="Join Demo" />
      </div>

      {/* Girl + stars container */}
      <div className="relative mt-10 w-full max-w-[760px] h-[320px] mx-auto">
        {stickers.map((s) => (
          <img
            key={s.id}
            src={s.src}
            alt={s.alt}
            style={{
              ...baseStickerStyle,
              left: `${s.left}px`,
              top: `${s.top}px`,
              width: `${s.w}px`,
              height: `${s.h}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Bloghero;

// src/components/Homepage/hero.jsx

import Sticker1 from "../../assets/sticker1.svg";
import Sticker2 from "../../assets/sticker2.svg";
import Sticker3 from "../../assets/sticker3.svg";
import Sticker4 from "../../assets/sticker4.svg";

import mobile from "../../assets/mobile.svg";
import grid from "../../assets/grid.svg";

import BlueBtn from "../ui/BlueBtn";

// Stickers only
const stickers = [
  { id: 1, src: Sticker1, left: 250, top: 260, w: 60, h: 71 },
  { id: 2, src: Sticker2, left: 930, top: 260, w: 60, h: 71 },
  { id: 3, src: Sticker3, left: 30, top: 400, w: 60, h: 71 },
  { id: 4, src: Sticker4, left: 1100, top: 390, w: 60, h: 71 },

  // ✅ Mobile mockup – perfect position, don't touch
  { id: 6, src: mobile, left: 370, top: 300, w: 500, h: 420 },
];

// garland flags positions on the curve
const flagPositions = [
  { x: 150, y: 145 },
  { x: 300, y: 175 },
  { x: 450, y: 195 },
  { x: 600, y: 180 },
  { x: 750, y: 195 },
  { x: 900, y: 175 },
  { x: 1050, y: 145 },
];

export default function Hero() {
  const baseStickerStyle = {
    position: "absolute",
    objectFit: "contain",
    zIndex: 5,
    pointerEvents: "none",
  };

  return (
    <main
      style={{ backgroundImage: `url(${grid})` }}
      className="mt-24 flex flex-col items-center text-center relative mx-auto 
                 pb-[750px] bg-no-repeat bg-cover bg-center"
    >
      {/* Heading */}
      <h1 className="font-semibold text-white leading-[1.05] 
                     max-w-6xl text-3xl sm:text-4xl md:text-[56px] tracking-tight">
        Because Great <span className="text-[#FCC174]">Design</span> Starts with a{" "}
        <span className="text-[#FCC174]">Vibe.</span>
      </h1>

      <p className="mt-5 text-gray-300 max-w-3xl text-[16px] sm:text-[18px] md:text-[26px]">
        Design every day. Live every pixel.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <button className="group px-8 py-3 rounded-full border-2 border-white text-white text-[16px] font-medium hover:bg-white hover:text-[#383737] transition flex items-center gap-2">
          Explore Courses{" "}
          <span className="text-xl group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>

        <BlueBtn text="Join Demo" />
      </div>

      {/* Stickers + mobile */}
      {stickers.map((s) => (
        <img
          key={s.id}
          src={s.src}
          style={{
            ...baseStickerStyle,
            left: s.left,
            top: s.top,
            width: s.w,
            height: s.h,
          }}
        />
      ))}

      {/* ✅ Intro Card – mobile ke left side ke niche */}
      <div
        className="absolute bg-[#F8F3EC] shadow-lg rounded-2xl px-8 py-5"
        style={{
          left: "70px",
          top: "560px",
          width: "280px",
        }}
      >
        <p className="text-[#383737] font-semibold mb-3">Introduction</p>
        <div className="h-2 bg-[#D9D9D9] rounded-full mb-2 w-[90%]"></div>
        <div className="h-2 bg-[#D9D9D9] rounded-full mb-2 w-[80%]"></div>
        <div className="h-2 bg-[#FCC174] rounded-full w-[75%]"></div>
      </div>

      {/* ✅ Goals Card – mobile ke right side ke niche */}
      <div
        className="absolute bg-[#F8F3EC] shadow-lg rounded-2xl px-8 py-5"
        style={{
          left: "890px",
          top: "560px",
          width: "280px",
        }}
      >
        <p className="text-[#383737] font-semibold mb-3">
          Goals, Achievements
        </p>
        <div className="h-2 bg-[#D9D9D9] rounded-full mb-2 w-[90%]"></div>
        <div className="h-2 bg-[#D9D9D9] rounded-full mb-2 w-[80%]"></div>
        <div className="h-2 bg-[#FCC174] rounded-full w-[75%]"></div>
      </div>

    </main>
  );
}

// src/components/Homepage/hero.jsx

import Sticker1 from "../../assets/sticker1.svg";
import Sticker2 from "../../assets/sticker2.svg";
import Sticker3 from "../../assets/sticker3.svg";
import Sticker4 from "../../assets/sticker4.svg";
import Sticker5 from "../../assets/sticker5.svg";
import mobile from "../../assets/mobile.svg";
import introsquare from "../../assets/introsquare.svg";
import goalsquare from "../../assets/goalsquare.svg";
import grid from "../../assets/grid.svg";


const stickers = [
  { id: 1, src: Sticker1, left: 180, top: 210, w: 84, h: 51, alt: "sticker1" },
  { id: 2, src: Sticker2, left: 960, top: 210, w: 54, h: 71, alt: "sticker2" },
  { id: 3, src: Sticker3, left: 60, top: 350, w: 54, h: 71, alt: "sticker3" },
  { id: 4, src: Sticker4, left: 1100, top: 350, w: 54, h: 71, alt: "sticker4" },
  { id: 5, src: Sticker5, left: 1150, top: 500, w: 54, h: 71, alt: "sticker5" },
  { id: 6, src: mobile, left: 315, top: 440, w: 600, h: 400, alt: "mobile" },
  { id: 7, src: introsquare, left: 20, top: 700, w: 304, h: 120, alt: "introsquare" },
  { id: 8, src: goalsquare, left: 910, top: 700, w: 304, h: 120, alt: "goalsquare" },
];

const testimonials = [
  { id: 1, quote: "“Office Takes All My Time, Sessions Feel Impossible.”" },
  { id: 2, quote: "“College eats my time, can’t attend sessions.”" },
  { id: 3, quote: "“I just want course exposure, not a 3–6 month commitment.”" },
  { id: 4, quote: "“I’ve got the UI basics, just need the UX Strong.”" },
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
  className="mt-24 flex flex-col items-center text-center relative mx-auto pb-[500px] md:pb-[650px] bg-no-repeat bg-cover bg-center"
>

      <h1
        className="font-semibold text-white leading-[1.05]
                   max-w-6xl text-3xl sm:text-4xl md:text-[56px]
                   tracking-tight md:whitespace-nowrap z-10"
      >
        Because Great{" "}
        <span className="text-[#FCC174] font-semibold">Design</span> Starts with
        a <span className="text-[#FCC174] font-semibold">Vibe.</span>
      </h1>

      <p
        className="mt-5 text-gray-300 max-w-3xl
                   text-[16px] sm:text-[18px] md:text-[26px]
                   md:whitespace-nowrap z-10"
      >
        Design every day. Live every pixel.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 z-10">
        <button className="group px-8 py-3 rounded-full border border-white text-white text-[16px] font-medium hover:bg-white hover:text-[#383737] transition duration-300 flex items-center gap-2">
          Explore Courses{" "}
          <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>

        <button className="px-8 py-3 rounded-full bg-[#4B8BFF] text-white text-[16px] font-medium hover:bg-[#5C9FFF] transition duration-300">
          Join Demo
        </button>
      </div>

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
    </main>
  );
}

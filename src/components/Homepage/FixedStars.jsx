// src/components/Homepage/FixedStars.jsx
import React from "react";
import Star1 from "../../assets/star1.svg";
import Star2 from "../../assets/star2.svg";

export default function FixedStars() {
  const stars = [
    { top: "4%",  left: "34%",  type: "normal", svg: Star1, size: 25 },
    { top: "8%",  left: "66%",  type: "zoom-in", svg: Star1, size: 25 },
    { top: "5%",  left: "68%",  type: "zoom-in", svg: Star1, size: 20 },
    { top: "74%", left: "72%",  type: "zoom-in", svg: Star1, size: 22 },
    { top: "82%", left: "44%",  type: "zoom-in", svg: Star2, size: 25 },
    { top: "4%",  left: "5%",   type: "zoom-out", svg: Star2, size: 50 },
    { top: "34%", left: "62%",  type: "normal", svg: Star1, size: 12 },
    { top: "88%", left: "6%",   type: "zoom-in", svg: Star2, size: 20 },
    { top: "64%", left: "34%",  type: "zoom-in", svg: Star1, size: 20 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((s, i) => {
        const classes =
          "absolute fixed-star " +
          (s.type === "zoom-in" ? "fs-zoom-in " : "") +
          (s.type === "zoom-out" ? "fs-zoom-out " : "");

        return (
          <img
            key={i}
            src={s.svg}
            alt="star"
            className={classes}
            draggable={false}
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              transformOrigin: "center center",
            }}
          />
        );
      })}
    </div>
  );
}

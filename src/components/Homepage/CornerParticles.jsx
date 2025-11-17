// src/components/Homepage/CornerParticles.jsx
import React from "react";

/**
 * CornerParticles -> renders soft corner waves (as large blurred circles).
 * Only from: top-right, bottom-left, bottom-right.
 * Triggered on parent .group:hover (hover-only).
 */
export default function CornerParticles() {
  const waves = [
    // top-right
    { corner: "top-right", size: 480 },
    { corner: "top-right", size: 360 },
    { corner: "top-right", size: 260 },

    // bottom-left
    { corner: "bottom-left", size: 480 },
    { corner: "bottom-left", size: 360 },
    { corner: "bottom-left", size: 260 },

    // bottom-right
    { corner: "bottom-right", size: 480 },
    { corner: "bottom-right", size: 360 },
    { corner: "bottom-right", size: 260 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden>
      {waves.map((w, i) => {
        const pos =
          w.corner === "top-right"
            ? { top: "-20%", right: "-20%" }
            : w.corner === "bottom-left"
            ? { bottom: "-20%", left: "-20%" }
            : { bottom: "-20%", right: "-20%" }; // bottom-right

        return (
          <div
            key={i}
            className="corner-wave"
            style={{
              ...pos,
              width: w.size,
              height: w.size,
              zIndex: 60, // show above content
              pointerEvents: "none",
            }}
          />
        );
      })}
    </div>
  );
}

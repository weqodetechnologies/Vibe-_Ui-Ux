// src/components/ui/BlueBtn.jsx
import React from "react";

export default function BlueBtn({ text }) {
  return (
    <button
      className="
        font-outfit
        rounded-full
        text-white
        font-medium
        shadow-[0_8px_20px_rgba(0,0,0,0.25)]
      "
      style={{
        padding: "12px 36px",
        fontSize: 16,
        background:
          "radial-gradient(100% 200% at 50% 0%,  #4E98FF 55%, #2564D8 100%)",
        border: "2px solid white",
      }}
    >
      {text}
    </button>
  );
}

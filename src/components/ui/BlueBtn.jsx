// src/ui/BlueBtn.jsx
import React from "react";

export default function BlueBtn({ text }) {
  return (
    <button
      type="button"
      className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 w-[288px] h-[42px] rounded-full font-semibold text-white shadow-lg bg-[#4E98FF] hover:opacity-95 transition"
    >
      {text}
    </button>
  );
}

// src/components/ui/YellowBtn.jsx
import React from "react";

export default function YellowBtn({ label, style = {}, className = "" }) {
  const baseStyle = {
    padding: "10px 30px",
    borderRadius: 9999,
    background: "linear-gradient(180deg, #FFD84E 0%, #EBC12E 100%)",
    border: "3px solid #FFFFFF",
    boxShadow: "0 8px 14px rgba(0,0,0,0.35)",
    fontSize: 18,
    width: "fit-content",
    whiteSpace: "nowrap",
    cursor: "default",
    userSelect: "none",
  };

  return (
    <div
      className={`inline-flex items-center justify-center font-outfit font-bold text-[#1E1E1E] ${className}`}
      style={{ ...baseStyle, ...style }}   // 👈 yaha se override hoga
    >
      {label}
    </div>
  );
}

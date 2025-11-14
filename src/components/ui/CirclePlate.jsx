// src/components/ui/CirclePlate.jsx
import React from "react";

export default function CirclePlate({ size = 160, className = "" }) {
  const stroke = 5;
  const bg = "#FAF3EA";
  const outline = "#383737";

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: bg,
        boxShadow: "-2px 11px 6px rgba(0, 0, 0, 0.25)",
        border: `${stroke}px solid ${outline}`,
      }}
    ></div>
  );
}

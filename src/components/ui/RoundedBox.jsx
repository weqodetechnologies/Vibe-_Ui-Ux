// src/components/ui/RoundedBox.jsx
import React from "react";

export default function RoundedBox({ width = 411, height = 145, className = "", children }) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "#FAF3EA",
        borderRadius: "38px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}

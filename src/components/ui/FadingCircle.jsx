// src/components/ui/FadingCircle.jsx

import React from "react";

export default function FadingCircle({
  size = 420,          // circle ka overall size
  outerOpacity = 0.28, // outer layer
  middleOpacity = 0.2, // middle layer
  innerOpacity = 0.12, // inner layer
  className = "",
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Outer Circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          background: `rgba(255,255,255,${outerOpacity})`,
        }}
      />

      {/* Middle Circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.75,
          height: size * 0.75,
          top: size * 0.125,
          left: size * 0.125,
          background: `rgba(255,255,255,${middleOpacity})`,
        }}
      />

      {/* Inner Circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.5,
          height: size * 0.5,
          top: size * 0.25,
          left: size * 0.25,
          background: `rgba(255,255,255,${innerOpacity})`,
        }}
      />
    </div>
  );
}

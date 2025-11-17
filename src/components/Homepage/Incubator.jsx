// src/components/Homepage/Incubator.jsx
import React from "react";
import IncubatorPurpleSection from "./IncubatorPurpleSection";

function Incubator() {
  return (
    <section className="w-full mt-10">

      {/* Heading above the purple box */}
      <div className="text-center mb-6">
        <h2 className="text-[40px] font-outfit font-semibold text-white leading-tight">
          The Vibe <span className="text-[#F8C57E]">Incubator</span> is Here!
        </h2>
        <p className="text-[20px] font-outfit text-white mt-2">
          Turn Your Case Study into a Real Product!
        </p>
      </div>

      {/* Purple section that contains coins + content */}
      <IncubatorPurpleSection />

    </section>
  );
}

export default Incubator;

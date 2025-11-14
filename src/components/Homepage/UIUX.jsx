import React from "react";
import UIUXCards from "../ui/UIUXcards";

export default function UIUX() {
  return (
    <div className="text-center text-white font-outfit">
      <h2 className="text-[46px] font-semibold leading-tight">
        Serious About{" "}
        <span className="text-[#f0b458] font-semibold">UIUX As A Career?</span>
      </h2>
      <p className="text-[40px] font-normal">These Are Courses For You.</p>

      <div className="mt-[100px]  bg-[#383737] flex items-center justify-center ">
        <UIUXCards />
      </div>
    </div>
  );
}

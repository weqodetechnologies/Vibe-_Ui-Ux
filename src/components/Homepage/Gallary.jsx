import React from "react";

export default function Gallery() {
  return (
    <div className="w-full flex flex-col items-center mt-16 mb-16 px-4">
      {/* Heading */}
      <h2 className="text-[34px] md:text-[38px] font-semibold text-white text-center">
        Check our <span className="text-[#F4C16E]">vibe</span>
      </h2>

      <p className="text-[#D5D5D5] font-medium text-[16px] md:text-[20px] mt-2 max-w-[520px] text-center leading-[22px]">
        Get inspired by the creative vibe of our design community.
      </p>

      {/* -------- Image layout frames (no images yet) -------- */}
      <div className="mt-14 w-full max-w-[1100px] h-[600px] flex gap-[40px]">
        {/* LEFT BIG FRAME */}
        <div className="flex-[0.6]">
          <div className="w-full h-full rounded-[22px] border-[6px] border-[#F4C16E] bg-[#3b3b3b]" />
        </div>

        {/* RIGHT SIDE (vertical split) */}
        <div className="flex-1 flex flex-col gap-[43px]">
          {/* TOP FRAME */}
          <div className="flex-[1.05]">
            <div className="w-full h-full rounded-[22px] border-[6px] border-[#F4C16E] bg-[#3b3b3b]" />
          </div>

          {/* BOTTOM TWO FRAMES (horizontal split) */}
          <div className="flex flex-1 gap-[43px]">
            <div className="flex-1">
              <div className="w-full h-full rounded-[22px] border-[6px] border-[#F4C16E] bg-[#3b3b3b]" />
            </div>
            <div className="flex-1">
              <div className="w-full h-full rounded-[22px] border-[6px] border-[#F4C16E] bg-[#3b3b3b]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

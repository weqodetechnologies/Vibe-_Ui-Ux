// src/components/VM.jsx
import React from "react";

import Target from "../../assets/Target.svg";
import Eye from "../../assets/Eye.svg";
import Heart from "../../assets/Heart.svg";

function VM() {
  const cards = [
    {
      id: 1,
      icon: Target,
      title: "Mission",
      text: "To democratize design education and make world-class UI/UX training accessible to everyone, regardless of their background or location.",
    },
    {
      id: 2,
      icon: Eye,
      title: "Vision",
      text: "To become the global leader in UI/UX education, creating a community of designers who shape the future of digital experiences.",
    },
    {
      id: 3,
      icon: Heart,
      title: "Value",
      text: "Innovation, inclusivity, and excellence drive everything we do. We foster creativity while maintaining the highest educational standards.",
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-20">
      <div>

        {/* HEADING */}
        <div className="rounded-[10px] px-6 sm:px-10 py-6 sm:py-8 max-w-3xl mx-auto text-center">
          <h2 className="text-[#FCC174] font-semibold text-[26px] sm:text-[30px] md:text-[34px]">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed text-gray-100">
            We believe great design can change the world. Our mission is to
            nurture creative minds and transform them into industry-leading
            UI/UX professionals.
          </p>
        </div>

        {/* SQUARE CARDS */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                bg-[#FFF3D9]
                border-[4px] border-[#FFDE07]
                rounded-[22px]
                shadow-sm
                flex flex-col items-start
                text-left
                px-7 py-7
                w-[280px]
                h-[280px]
              "
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-[18px] flex items-center justify-center mb-5">
                <img src={card.icon} alt={card.title} className="w-12 h-12" />
              </div>

              {/* Title */}
              <h3 className="text-[27px] font-semibold text-black mb-3">
                {card.title}
              </h3>

              {/* Text */}
              <p className="text-[15px] leading-[1.25] text-[#222222]">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default VM;

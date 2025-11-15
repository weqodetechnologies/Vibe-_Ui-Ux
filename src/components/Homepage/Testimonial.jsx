import React, { useState, useEffect } from "react";
import pinkQuote from "../../assets/pinkquote.svg";

const testimonials = [
  {
    text:
      "The Course Gave Me A Strong Foundation In UI/UX Principles. The Hands-On Projects Really Helped Me Understand How To Design With Real Users In Mind!",
    name: "Aditi Sharma",
    subtitle: "BA Student, Pune",
  },
  {
    text:
      "Before Joining, I Had Zero Design Experience. The Mentors Explained Everything So Clearly From Wireframing To Usability Testing.",
    name: "Rohan Mehta",
    subtitle: "BCA Student, Ahmedabad",
  },
  {
    text:
      "I Loved How Practical The Sessions Were. The Assignments Pushed Me To Think Creatively While Maintaining A User-First Approach.",
    name: "Sneha Nair",
    subtitle: "Fine Arts Student, Kochi",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    function update() {
      setVisible(window.innerWidth >= 768 ? 3 : 1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visible);
  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const cardWidthPercent = 100 / visible;

  return (
    <section className="w-full py-20">
      <div className="max-w-4xl mx-auto px-0 text-center mt-10">
        <h2 className="text-[42px] font-semibold text-[#f0b458] leading-tight font-outfit">
          Testimonials
        </h2>
        <p className="text-white mt-5 mb-8 font-outfit text-[18px]">
          Our students share how Vibe shaped their creative path.
        </p>

        {/* Carousel viewport */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                width: `${(testimonials.length * 100) / visible}%`,
                transform: `translateX(-${index * cardWidthPercent}%)`,
              }}
            >
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3"
                  style={{
                    width: `${cardWidthPercent}%`,
                    boxSizing: "border-box",
                  }}
                >
                  {/* CARD */}
                  <div
                    className="relative bg-white rounded-[16px] p-6 pt-16 mx-auto flex flex-col justify-between"
                    style={{
                      border: "3px solid #FFD64F",
                      borderRadius: "16px",
                      height: 380,        // <- sab cards same height
                      maxWidth: 370,
                    }}
                  >
                    {/* Pink Quote SVG */}
                    <div className="absolute top-6 left-5">
                      <img src={pinkQuote} alt="quote" className="w-16 h-16" />
                    </div>

                    {/* TOP: text + stars */}
                    <div>
                      <p className="text-[#1E1E1E] text-[18px] font-outfit font-semibold leading-snug text-left mt-8">
                        {item.text}
                      </p>

                      <div
                        className="mt-1 text-left text-[20px]"
                        style={{ color: "#FFD64F" }}
                      >
                        ★★★★★
                      </div>
                    </div>

                    {/* BOTTOM: name + subtitle */}
                    <div className="mt-1">
                      <p className="text-[#E8489A] font-semibold text-left font-outfit">
                        {item.name}
                      </p>
                      <p className="text-[#6A6A6A] text-[13px] text-left font-outfit">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  {/* END CARD */}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              aria-disabled={index === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                index === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                background: "#FFFFFF",
                color: "#000000",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={index === maxIndex}
              aria-disabled={index === maxIndex}
              className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                index === maxIndex ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                background: "#FFFFFF",
                color: "#000000",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

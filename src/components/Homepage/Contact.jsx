// src/components/Contact.jsx
import React from "react";
import FadingCircle from "../ui/FadingCircle";
import YellowBtn from "../ui/YellowBtn";
import star1 from "../../assets/star1.svg";
import star2 from "../../assets/star2.svg";

export default function Contact() {
  return (
    <div className="w-full flex justify-center mt-10 px-4 md:px-6 font-outfit">
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #5D38DE 47%, #321E78 100%)",
          borderRadius: 29,
          width: "100%",
          maxWidth: 1250,
          height: 800,
        }}
      >
        {/* CONTACT US big background text */}
        <div
          className="pointer-events-none select-none absolute font-extrabold uppercase"
          style={{
            top: 80,
            left: "52%",
            transform: "translateX(-50%)",
            fontSize: 185,
            lineHeight: 0.3,
            whiteSpace: "nowrap",
            color: "#7B56FC",
            filter: "drop-shadow(10px 6px 6px rgba(13, 10, 19, 0.3))",
            opacity: 0.5,
          }}
        >
          CONTACT&nbsp;US
        </div>

        {/* TOP STARS */}
        {/* left diamond star */}
        <img
          src={star1}
          alt=""
          className="absolute pointer-events-none select-none"
          style={{
            top: 27,
            left: 240,
            width: 50,
            height: 40,
            zIndex: 4,
          }}
        />
        {/* center burst star */}
        <img
          src={star2}
          alt=""
          className="absolute pointer-events-none select-none"
          style={{
            top: 20,
            left: "76%",
            transform: "translateX(-50%)",
            width: 45,
            height: 45,
            zIndex: 4,
          }}
        />
        {/* right small diamond star */}
        <img
          src={star1}
          alt=""
          className="absolute pointer-events-none select-none"
          style={{
            top: 135,
            right: 60,
            width: 40,
            height: 30,
            zIndex: 4,
            opacity: 0.8,
          }}
        />

        {/* LEFT SIDE YELLOW BOXES */}
        <div
          className="absolute"
          style={{
            top: 355,
            left: 80,
            zIndex: 5,
            textAlign: "left",
          }}
        >
          {[
            { label: "UIUX", width: 180 },
            { label: "Career Switch", width: 230 },

            // row of two: Payment Plans + Course Fees
            [
              { label: "Payment Plans", width: 210 },
              { label: "Course Fees", width: 200 },
            ],

            { label: "Career Opportunities", width: 270 },
            { label: "Placement Opportunity", width: 280 },

            // row of two: Portfolio + Case Studies
            [
              { label: "Portfolio", width: 170 },
              { label: "Case Studies", width: 200 },
            ],
          ].map((item, index) => {
            // If it's a row of 2 buttons
            if (Array.isArray(item)) {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: 18,
                  }}
                >
                  <div style={{ marginRight: 26 }}>
                    <YellowBtn
                      label={item[0].label}
                      style={{ width: item[0].width, height: 44 }}
                    />
                  </div>

                  <YellowBtn
                    label={item[1].label}
                    style={{ width: item[1].width, height: 44 }}
                  />
                </div>
              );
            }

            // Single button rows
            return (
              <div key={index} style={{ marginBottom: 18 }}>
                <YellowBtn
                  label={item.label}
                  style={{
                    width: item.width,
                    height: 44,
                  }}
                />
              </div>
            );
          })}
        </div>

   
        {/* RIGHT SIDE FORM CARD */}
        <div
          className="absolute"
          style={{
            top: 290,
            right: 80,
            zIndex: 6,
          }}
        >
          <div
            style={{
              width: 350, // <<< card chhota
              padding: "28px 28px 28px", // <<< padding reduce
              borderRadius: 18,
              border: "2px solid #FFFFFF",
              background: "linear-gradient(120deg, #7B56FC 0%, #6742E0 48%)",
              boxShadow: "0 16px 28px rgba(0,0,0,0.45)",
              textAlign: "left",
            }}
          >
            {/* Name */}
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 20, // <<< label font chhota
                  marginBottom: 8,
                }}
              >
                Name
              </div>
              <input
                placeholder="Enter Full Name"
                className="w-full rounded-[10px] outline-none placeholder:text-[#B3AECF] text-[#5C5780]"
                style={{
                  padding: "10px 14px", // <<< input smaller
                  border: "none",
                  background: "#FFFFFF",
                  fontSize: 14, // <<< text smaller
                }}
              />
            </div>

            {/* Contact No. */}
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 20,
                  marginBottom: 8,
                }}
              >
                Contact No.
              </div>
              <input
                placeholder="Enter Contact Number"
                className="w-full rounded-[10px] outline-none placeholder:text-[#B3AECF] text-[#5C5780]"
                style={{
                  padding: "10px 14px",
                  border: "none",
                  background: "#FFFFFF",
                  fontSize: 14,
                }}
              />
            </div>

            {/* Mail Id */}
            <div style={{ marginBottom: 26 }}>
              <div
                style={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 20,
                  marginBottom: 8,
                }}
              >
                Mail Id
              </div>
              <input
                placeholder="Enter Mail"
                className="w-full rounded-[10px] outline-none placeholder:text-[#B3AECF] text-[#5C5780]"
                style={{
                  padding: "10px 14px",
                  border: "none",
                  background: "#FFFFFF",
                  fontSize: 14,
                }}
              />
            </div>

            {/* Request Details button */}
            <button
              style={{
                width: "100%",
                marginTop: 20,
                padding: "10px 10px", // <<< smaller button height
                borderRadius: 9999,
                background: "linear-gradient(180deg, #FFE46F 0%, #FFC72A 100%)",
                border: "3px solid #F5D376",
                boxShadow: "0 10px 18px rgba(0,0,0,0.45)",
                color: "#1E1E1E",
                fontWeight: 700,
                fontSize: 17, // <<< button text slightly smaller
                cursor: "pointer",
              }}
            >
              Request Details
            </button>
          </div>
        </div>

        {/* BOTTOM LEFT FADING CIRCLE */}
        <div
          className="absolute"
          style={{
            bottom: -220,
            left: -220,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <FadingCircle
            size={590}
            outerOpacity={0.04}
            middleOpacity={0.06}
            innerOpacity={0.08}
          />
        </div>
      </div>
    </div>
  );
}

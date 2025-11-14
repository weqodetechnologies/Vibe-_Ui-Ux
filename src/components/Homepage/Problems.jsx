// src/components/Homepage/Problems.jsx
import React, { useEffect, useRef, useState } from "react";
import CirclePlate from "../ui/CirclePlate";

import avatar1 from "../../assets/girl1.svg";
import avatar2 from "../../assets/girl2.svg";
import avatar3 from "../../assets/girl3.svg";
import avatar4 from "../../assets/girl4.svg";
import balloons from "../../assets/balloon.svg";
import innerBalloon from "../../assets/innerballon.svg";


export default function Problems() {
  const stageRef = useRef(null);
  const stageDefault = { width: 1100, height: 720 };

  const [stageRect, setStageRect] = useState(stageDefault);

  useEffect(() => {
    function measure() {
      const el = stageRef.current;
      if (!el) {
        setStageRect(stageDefault);
        return;
      }
      const width = el.clientWidth || stageDefault.width;
      const height = el.clientHeight || stageDefault.height;
      setStageRect({ width, height });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // breakpoints derived from container width
  const isMobile = stageRect.width <= 640;
  const isTablet = !isMobile && stageRect.width <= 960;

  // sizes responsive
  const circleSize = isMobile ? 72 : isTablet ? 96 : 120;
  const boxWidth = isMobile ? Math.min(stageRect.width - 48, 340) : 360;
  const boxHeight = isMobile ? "auto" : 120;
  const centerYOffset = isMobile ? 32 : 55;
  const pillWidth = isMobile ? Math.min(stageRect.width - 80, 300) : 330;

  // desktop positioning values (kept from your original)
  const topCardY = 50;
  const bottomCardY = 400;
  const gapBetweenColumns = 420;

  // cards with highlight phrases
  const cardsBase = [
    {
      id: 1,
      avatar: avatar1,
      quote: "Office Takes All My Time, Sessions Feel Impossible.",
      highlight: "Office",
      column: "left",
      wrapperTop: topCardY,
      circleTop: 35,
      imgSizeRatio: 0.65,
    },

    {
      id: 2,
      avatar: avatar2,
      quote: "College Eats My Time, Can’t Attend Sessions.",
      highlight: "College",
      column: "right",
      wrapperTop: topCardY,
      circleTop: 35,
      imgSizeRatio: 0.65,
    },

    {
      id: 3,
      avatar: avatar3,
      quote: "I Just Want Course Exposure, Not A 3–6 Month Commitment.",
      highlight: "Course Exposure",
      column: "left",
      wrapperTop: bottomCardY,
      circleTop: 35,
      imgSizeRatio: 0.65,
    },

    {
      id: 4,
      avatar: avatar4,
      quote: "I’ve Got The UI Basics, Just Need The UX Strong.",
      highlight: "UX Strong",
      column: "right",
      wrapperTop: bottomCardY,
      circleTop: 35,
      imgSizeRatio: 0.65,
    },
  ];

  // compute desktop absolute positions
  const cards = (() => {
    const centerX = stageRect.width / 2;
    const halfGap = gapBetweenColumns / 2;
    return cardsBase.map((c) => ({
      ...c,
      wrapperLeft:
        c.column === "left"
          ? Math.round(centerX - boxWidth - halfGap)
          : Math.round(centerX + halfGap),
      circleLeft: c.column === "left" ? 12 : boxWidth - circleSize + 12,
    }));
  })();

  // regex escape helper
  function escapeRegExp(string = "") {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // render quote with curly quotes attached and highlight applied
  function renderQuote(quote = "", highlight = "") {
    const defaultColor = "#5E6670";
    const highlightColor = "#EF578F";
    const fontSize = isMobile ? 15 : 18;
    const maxWidth = boxWidth - 48;

    if (!highlight) {
      return (
        <div
          style={{
            color: defaultColor,
            fontFamily: "Outfit, sans-serif",
            fontWeight: 700,
            fontSize,
            textAlign: "center",
            lineHeight: 1.35,
            wordBreak: "break-word",
            whiteSpace: "normal",
            display: "inline-block",
            maxWidth,
          }}
        >
          <span>“</span>
          <span>{quote}</span>
          <span>”</span>
        </div>
      );
    }

    const escaped = escapeRegExp(highlight);
    const regex = new RegExp(`(${escaped})`, "ig"); // global, case-insensitive
    const parts = quote.split(regex);

    return (
      <div
        style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 700,
          fontSize,
          textAlign: "center",
          lineHeight: 1.35,
          wordBreak: "break-word",
          whiteSpace: "normal",
          display: "inline-block",
          maxWidth,
        }}
      >
        <span style={{ color: defaultColor }}>“</span>
        {parts.map((p, i) => {
          if (!p) return null;
          if (p.toLowerCase() === highlight.toLowerCase()) {
            return (
              <span key={i} style={{ color: highlightColor }}>
                {p}
              </span>
            );
          }
          return (
            <span key={i} style={{ color: defaultColor }}>
              {p}
            </span>
          );
        })}
        <span style={{ color: defaultColor }}>”</span>
      </div>
    );
  }

  // render single card; supports both stacked (mobile/tablet) and desktop absolute
  function renderCard(card) {
    // stacked layout
    if (isMobile || isTablet) {
      return (
        <div
          key={card.id}
          style={{
            width: "100%",
            maxWidth: boxWidth,
            margin: "18px auto",
            position: "relative",
            paddingLeft: circleSize / 2 + 6,
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {/* avatar overlapping left */}
          <div
            style={{
              position: "absolute",
              left: -circleSize / 2,
              top: -circleSize / 4,
              width: circleSize,
              height: circleSize,
              zIndex: 30,
            }}
          >
            <CirclePlate size={circleSize} />
            <img
              src={card.avatar}
              alt={`avatar-${card.id}`}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: circleSize * card.imgSizeRatio,
                height: circleSize * card.imgSizeRatio,
                objectFit: "contain",
              }}
            />
          </div>

          {/* cream box */}
          <div
            style={{
              background: "#FBF4EE",
              borderRadius: 22,
              boxShadow: "inset 0 -6px 0 rgba(0,0,0,0.02)",
              padding: "18px 20px",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ lineHeight: 1.3 }}>{renderQuote(card.quote, card.highlight)}</div>
          </div>
        </div>
      );
    }

    // desktop absolute card
    return (
      <div
        key={card.id}
        style={{
          position: "absolute",
          left: card.wrapperLeft,
          top: card.wrapperTop,
          width: boxWidth,
          height: typeof boxHeight === "number" ? boxHeight + circleSize : boxHeight,
          zIndex: 20,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: circleSize + 15,
            width: "100%",
            height: boxHeight,
            background: "#FBF4EE",
            borderRadius: 28,
            boxShadow: "inset 0 -6px 0 rgba(0,0,0,0.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 26px",
            fontFamily: "Outfit, sans-serif",
            fontSize: 18,
            fontWeight: 700,
            color: "#5E6670",
          }}
        >
          <div style={{ lineHeight: "1.35" }}>{renderQuote(card.quote, card.highlight)}</div>
        </div>

        {/* Avatar */}
        <div
          style={{
            position: "absolute",
            left: card.circleLeft,
            top: card.circleTop,
            width: circleSize,
            height: circleSize,
            zIndex: 30,
          }}
        >
          <CirclePlate size={circleSize} />
          <img
            src={card.avatar}
            alt={`avatar-${card.id}`}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: circleSize * card.imgSizeRatio,
              height: circleSize * card.imgSizeRatio,
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    );
  }

  // stacked order used on small screens (top-left, top-right, pill, bottom-left, bottom-right)
  const stackedOrder = [cardsBase[0], cardsBase[1], "pill", cardsBase[2], cardsBase[3]];

  // center point for desktop pill
  const centerPoint = { x: Math.round(stageRect.width / 2), y: Math.round(stageRect.height / 2) };

  return (
    <section className="relative bg-[#383737] text-white py-8 flex flex-col items-center">
      <div
        ref={stageRef}
        className="relative mx-auto"
        style={{
          width: "100%",
          maxWidth: stageDefault.width,
          height: isMobile ? "auto" : stageDefault.height,
          padding: isMobile ? "36px 16px" : "0",
        }}
      >
        {/* Heading */}
        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            left: isMobile ? "auto" : "50%",
            transform: isMobile ? "none" : "translateX(-50%)",
            top: isMobile ? 0 : 6,
            zIndex: 40,
            textAlign: "center",
            width: isMobile ? "100%" : 680,
            marginBottom: isMobile ? 20 : 0,
            fontFamily: "Outfit, sans-serif",
          }}
        >
          <h2 className="text-4xl font-semibold leading-tight" style={{ color: "white" }}>
            <span>Your </span>
            <span style={{ color: "#FCC174" }}>Problems</span> & <br />
            <span style={{ color: "#4E98FF" }}>Our Solution</span> To It.
          </h2>
        </div>

        {/* stacked flow for mobile/tablet */}
        {(isMobile || isTablet) && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            {stackedOrder.map((item, idx) => {
              if (item === "pill") {
                return (
                  <div
                    key="pill"
                    style={{
                      width: pillWidth,
                      height: 120,
                      borderRadius: 28,
                      overflow: "hidden",
                      background: "linear-gradient(to bottom,#6EA6FF,#4E98FF)",
                      border: "3px solid #C5C5C5",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.30)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "12px 0",
                      position: "relative",
                    }}
                  >
                    {/* decorative balloons above pill (optional) */}
                    <img
                      src={balloons}
                      alt="decor-balloons"
                      style={{
                        position: "absolute",
                        right: 8,
                        top: -80,
                        width: Math.round(pillWidth * 0.32),
                        zIndex: 5,
                        pointerEvents: "none",
                      }}
                    />

                    {/* inner balloon clipped inside pill */}
                    <img
                      src={innerBalloon}
                      alt="inner-balloon"
                      style={{
                        position: "absolute",
                        left: -18,
                        top: 12,
                        width: isMobile ? 56 : 64,
                        height: "auto",
                        zIndex: 10,
                        pointerEvents: "none",
                      }}
                    />

                    <div style={{ textAlign: "center", fontFamily: "Outfit, sans-serif", zIndex: 20 }}>
                      <h3 style={{ margin: 0, color: "#fff", fontWeight: 800, fontSize: 20 }}>No Excuses Left!</h3>
                      <p style={{ margin: 0, color: "rgba(255,255,255,0.95)", fontWeight: 600, marginTop: 6 }}>
                        We Built Solutions For All <br />
                        Your Problems.
                      </p>
                    </div>
                  </div>
                );
              }
              return renderCard(item);
            })}
          </div>
        )}

        {/* desktop absolute layout */}
        {!isMobile && !isTablet && (
          <>
            {/* desktop cards */}
            {cards.map((c) => renderCard(c))}

            {/* CENTER BLUE PILL WITH BALLOONS + INNER BALLOON CLIPPED */}
            <div
              style={{
                position: "absolute",
                left: centerPoint.x,
                top: centerPoint.y + centerYOffset,
                transform: "translate(-50%, -50%)",
                zIndex: 15,
              }}
            >
              <div style={{ position: "relative", width: pillWidth, height: 120 }}>
                {/* decorative balloons above the pill */}
                <img
                  src={balloons}
                  alt="decor-balloons"
                  style={{
                    position: "absolute",
                    right: 10,
                    top: -150,
                    width: 120,
                    zIndex: -5,
                    pointerEvents: "none",
                  }}
                />

                {/* pill container (clipping) */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: 28,
                    overflow: "hidden",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.30)",
                    border: "3px solid #C5C5C5",
                    background: "linear-gradient(to bottom,#6EA6FF,#4E98FF)",
                  }}
                >
                  {/* inner balloon placed inside the pill on left, clipped if overflowing */}
                  <img
                    src={innerBalloon}
                    alt="inner-balloon"
                    style={{
                      position: "absolute",
                      left: 10,
                      top: 12,
                      width: 40,
                      height: "auto",
                      zIndex: 10,
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      position: "relative",
                      zIndex: 20,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Outfit, sans-serif",
                      textAlign: "center",
                      padding: "8px 12px",
                    }}
                  >
                    <div>
                      <h3 style={{ margin: 0, color: "#fff", fontWeight: 800, fontSize: 22 }}>No Excuses Left!</h3>
                      <p style={{ margin: 0, color: "rgba(255,255,255,0.95)", fontWeight: 600, marginTop: 6 }}>
                        We Built Solutions For All <br />
                        Your Problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

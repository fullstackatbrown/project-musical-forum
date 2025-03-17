"use client";
import React, { useState, useEffect } from "react";

const SpotlightEffect = ({ sectionId, color}) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [sectionId]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `linear-gradient(to bottom, ${color}, transparent)`,
        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Triangle shape
        opacity: opacity,
        transition: "opacity 0.3s ease-in-out",
        pointerEvents: "none",
      }}
    />
  );
};

export default SpotlightEffect;

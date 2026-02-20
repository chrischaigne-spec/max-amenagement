"use client";

import { useState, useEffect } from "react";

export default function BottomBlur() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOpacity(y >= 300 ? 0 : 1 - y / 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 h-32 backdrop-blur-md transition-opacity duration-300"
      style={{
        opacity,
        maskImage: "linear-gradient(to top, black 30%, transparent)",
        WebkitMaskImage: "linear-gradient(to top, black 30%, transparent)",
      }}
    />
  );
}

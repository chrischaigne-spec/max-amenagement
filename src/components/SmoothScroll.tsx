"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.06,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToElement = useCallback((hash: string) => {
    const target = document.getElementById(hash.replace("#", ""));
    if (!target) return;

    // Stop Lenis, use native scroll (respects scroll-margin-top), then restart
    const lenis = lenisRef.current;
    if (lenis) lenis.stop();

    target.scrollIntoView({ behavior: "smooth" });

    // Resume Lenis after native scroll completes
    setTimeout(() => {
      if (lenis) lenis.start();
    }, 1000);
  }, []);

  /* After cross-page navigation, scroll to anchor */
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Wait for the page to fully render and layout to stabilize
    const timeout = setTimeout(() => scrollToElement(hash), 300);
    return () => clearTimeout(timeout);
  }, [pathname, scrollToElement]);

  /* Intercept clicks on same-page anchor links */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }

      const hash = url.hash;
      if (!hash) return;

      const isSamePage = url.pathname === window.location.pathname;

      if (isSamePage) {
        e.preventDefault();
        window.history.pushState(null, "", hash);
        scrollToElement(hash);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [scrollToElement]);

  return null;
}

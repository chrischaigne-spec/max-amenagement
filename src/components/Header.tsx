"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/amenagement-interieur", label: "Intérieur" },
  { href: "/amenagement-exterieur", label: "Extérieur" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#temoignages", label: "Avis" },
];

const easing = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = useCallback((e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full font-manrope">
      {/* ─── Pill bar ─── */}
      <div
        className={`
          mx-auto mt-4 transition-all duration-300 ease-in-out
          ${scrolled
            ? "max-w-[1200px] rounded-2xl border border-white/20 bg-[#0F0F0F]/90 shadow-xl backdrop-blur-lg py-2 mx-4 lg:mx-auto"
            : "max-w-[1200px] rounded-2xl border border-transparent bg-transparent py-5 mx-4 lg:mx-auto"
          }
        `}
      >
        <nav className="flex items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex shrink-0 items-center"
            onClick={(e) => { closeMenu(); handleHomeClick(e); }}
          >
            <Image
              src="/branding/logo-max-amenagement.png"
              alt="Max Aménagement - Artisan aménagement Monts du Lyonnais"
              width={120}
              height={36}
              priority
              className={`max-w-[100px] h-auto sm:max-w-[120px] transition-all duration-300 ${
                scrolled ? "brightness-110 contrast-110 drop-shadow-[0_0_6px_rgba(0,0,0,0.4)]" : ""
              }`}
            />
          </Link>

          {/* Desktop Nav — hidden below lg */}
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={link.href === "/" ? handleHomeClick : undefined}
                  className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* CTA — always visible, smaller text on mobile */}
            <div className="hidden sm:block">
              <AnimatedButton
                href="/#contact"
                label="Parlons de votre projet"
                compact
              />
            </div>

            {/* Hamburger — visible below lg */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <span
                className={`absolute block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* ─── Mobile Fullscreen Menu ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easing }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl lg:hidden"
          >
            {/* Close button */}
            <button
              onClick={closeMenu}
              className="absolute right-4 top-6 flex h-11 w-11 items-center justify-center"
              aria-label="Fermer le menu"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <span className="absolute block h-[1.5px] w-5 rotate-45 bg-white" />
              <span className="absolute block h-[1.5px] w-5 -rotate-45 bg-white" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 * i,
                    ease: easing,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => { closeMenu(); if (link.href === "/") handleHomeClick(e); }}
                    className="block min-h-[44px] text-2xl font-semibold text-white transition-colors duration-300 hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.4,
                  delay: 0.05 * navLinks.length,
                  ease: easing,
                }}
                className="mt-4"
              >
                <AnimatedButton
                  href="/#contact"
                  label="Parlons de votre projet"
                  compact={false}
                  onClick={closeMenu}
                />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

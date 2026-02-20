"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  href: string;
  label: string;
  compact?: boolean;
  onClick?: () => void;
}

export default function AnimatedButton({
  href,
  label,
  compact = false,
  onClick,
}: AnimatedButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2 rounded-full bg-white text-sm font-semibold text-black
        border-0 outline-0 ring-0
        focus:outline-none focus:ring-0 focus-visible:outline-none
        hover:outline-none hover:ring-0
        ${compact ? "px-6 py-2.5" : "px-7 py-3.5"}`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Sliding dark overlay — inset -1px to cover any sub-pixel gap */}
      <span className="pointer-events-none absolute -inset-px rounded-full bg-zinc-900 origin-right scale-x-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100" />

      {/* Text */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {label}
      </span>

      {/* Arrow */}
      <ArrowRight
        size={compact ? 16 : 18}
        strokeWidth={1.5}
        className="relative z-10 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:text-white"
      />
    </Link>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─── Animated Counter ─── */

function Counter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const isDecimal = target % 1 !== 0;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {target % 1 !== 0 ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

/* ─── Carousel images ─── */

const carouselImages = [
  "/images/realisations/projet-1.webp",
  "/images/realisations/projet-2.webp",
  "/images/realisations/projet-3.webp",
  "/images/realisations/projet-4.webp",
  "/images/realisations/projet-5.webp",
  "/images/realisations/projet-6.webp",
];

/* ─── Stats ─── */

const stats = [
  {
    value: 15,
    suffix: "",
    label: "Années d'Expertise",
    desc: "Au service de la rénovation et l'aménagement intérieur/extérieur.",
  },
  {
    value: 25,
    suffix: "",
    label: "Projets Réalisés",
    desc: "Projets livrés avec une exigence de finition absolue.",
  },
  {
    value: 1,
    suffix: "",
    label: "Partenaire Unique",
    desc: "Coordination des différents corps de métiers.",
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "Avis Travaux.com",
    desc: "Nos clients nous recommandent.",
  },
];

/* ─── Main Section ─── */

export default function About() {
  const tripled = [...carouselImages, ...carouselImages, ...carouselImages];

  return (
    <section id="a-propos" className="scroll-mt-[100px] bg-white py-24 font-manrope">
      {/* Header split */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <span className="inline-block rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold tracking-wide text-white">
              A Propos
            </span>
            <h2 className="mt-6 text-3xl font-light tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
              Maître Artisan
              <br />
              Intérieur-Extérieur
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-end">
            <p className="text-base leading-[1.8] text-zinc-600">
              <span className="font-semibold text-zinc-900">
                Max Aménagement, c&apos;est 15 ans d&apos;expertise
              </span>{" "}
              au service de vos projets dans les Monts du Lyonnais.{" "}
              <span className="font-semibold text-zinc-900">
                Artisan polyvalent
              </span>
              , j&apos;accompagne particuliers et professionnels dans
              leurs aménagements intérieurs et extérieurs, de la conception à la
              réalisation.{" "}
              <span className="font-semibold text-zinc-900">
                Mon engagement : un travail soigné, des délais respectés et des
                solutions adaptées à chaque projet.
              </span>{" "}
              Parce que votre satisfaction construit ma réputation.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-16 overflow-hidden">
        <div className="flex gap-6 animate-marquee-left group-hover:[animation-play-state:paused]">
          {tripled.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-[240px] w-[360px] shrink-0 overflow-hidden rounded-3xl sm:h-[280px] sm:w-[420px]"
            >
              <Image
                src={src}
                alt={`Réalisation Max Aménagement ${(i % 6) + 1}`}
                fill
                sizes="420px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-5xl font-light tracking-tight text-black lg:text-6xl">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold text-zinc-900">
                {s.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

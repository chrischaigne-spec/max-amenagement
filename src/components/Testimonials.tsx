"use client";

import { useState, useRef } from "react";
import { Star } from "lucide-react";
import { motion, type PanInfo } from "framer-motion";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  date: string;
  works: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Client",
    location: "Taluyers",
    rating: 5,
    date: "28 mars 2025",
    works: "Terrassement (35 m²)",
    text: "Le projet a été mené avec professionnalisme. Travail bien fait avec grand soin et respect total du jardin et des obstacles extérieurs. Je recommande cet artisan.",
  },
  {
    name: "Éric",
    location: "Villechenève",
    rating: 4,
    date: "24 mars 2025",
    works: "Terrassement (200 m²)",
    text: "Les chantiers (enrochement, accès) ont été bien exécutés. Satisfait du résultat, d'autant plus que Max a accepté les travaux malgré les obstacles techniques. Je recommande.",
  },
  {
    name: "Christophe Petchanatz",
    location: "Amplepuis",
    rating: 5,
    date: "26 mai 2025",
    works: "Démolition intérieure & Rénovation",
    text: "Max est disponible, pertinent et efficace. Très satisfaits des divers travaux (démolition, plomberie, toiture). Tarifs corrects et excellent suivi de projet. Très recommandé.",
  },
  {
    name: "Kilyan",
    location: "Caluire-et-Cuire",
    rating: 5,
    date: "6 janvier 2025",
    works: "Maçonnerie (Rénovation)",
    text: "Les travaux se sont très bien passés. En plus d'un travail de qualité, Max est source de bonnes propositions. Je recommande.",
  },
  {
    name: "Amélie Mlynski",
    location: "Soucieu-en-Jarrest",
    rating: 5,
    date: "8 août 2024",
    works: "Abri de jardin (7 m²)",
    text: "Max a été à l'écoute et source de propositions. La réalisation est à la hauteur de nos attentes. Un très grand merci pour l'écoute et l'amabilité.",
  },
  {
    name: "Hanemotep",
    location: "Craponne",
    rating: 5,
    date: "8 août 2024",
    works: "Maçonnerie (Ouverture mur porteur)",
    text: "Travail parfaitement réalisé dans les temps avec un coût maîtrisé. Très agréable et de bon conseil, je n'hésiterai pas à le solliciter pour la suite.",
  },
  {
    name: "Julien Michel",
    location: "Saint-Cyr-de-Valorges",
    rating: 5,
    date: "23 mai 2024",
    works: "Chemin d'accès (Gravier 10 m²)",
    text: "Personne très agréable. Le travail a été très bien réalisé. Je recommande.",
  },
  {
    name: "Videmann",
    location: "Lozanne",
    rating: 5,
    date: "15 mai 2024",
    works: "Terrassement & Paysagisme (585 m²)",
    text: "Professionnel exemplaire. De très bons conseils, respect des délais et travail minutieux. Nous sommes très satisfaits de la pose des traverses paysagères.",
  },
  {
    name: "Thimonier",
    location: "",
    rating: 5,
    date: "5 février 2024",
    works: "Terrassement",
    text: "Super professionnel, très bon contact, ponctuel et arrangeant. Vraiment ravie d'avoir trouvé un artisan comme ça. Merci beaucoup.",
  },
];

const row1 = testimonials.slice(0, 5);
const row2 = testimonials.slice(5, 9);

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={0}
          fill={i < rating ? "#FACC15" : "#D4D4D8"}
        />
      ))}
    </div>
  );
}

const cardBg = (index: number) =>
  index % 2 === 0 ? "bg-slate-50" : "bg-orange-50/30";

function TestimonialCard({
  t,
  index,
  className = "",
}: {
  t: Testimonial;
  index: number;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 flex-col rounded-3xl border border-zinc-100 p-6 font-manrope ${cardBg(index)} ${className}`}
    >
      <Stars rating={t.rating} />
      <p className="mt-2 text-[11px] text-zinc-400">
        Évalué le {t.date} &bull; {t.works}
      </p>
      <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-zinc-900">
        &ldquo;{t.text}&rdquo;
      </p>
      <p className="mt-4 text-sm font-semibold text-black">
        {t.name}
        {t.location && (
          <span className="ml-1 font-normal text-zinc-400">— {t.location}</span>
        )}
      </p>
    </div>
  );
}

/* ─── Desktop: Infinite Marquee ─── */

function MarqueeRow({
  items,
  direction,
  startIndex,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  startIndex: number;
}) {
  const tripled = [...items, ...items, ...items];

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div
        className={`flex gap-6 ${
          direction === "right" ? "animate-marquee-right" : "animate-marquee-left"
        } group-hover:[animation-play-state:paused]`}
      >
        {tripled.map((t, i) => (
          <TestimonialCard
            key={`${t.name}-${i}`}
            t={t}
            index={startIndex + (i % items.length)}
            className="w-[340px]"
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Mobile: Swipeable Slider ─── */

function MobileSlider() {
  const [active, setActive] = useState(0);
  const dragRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipe = info.offset.x;
    if (swipe < -50 && active < testimonials.length - 1) {
      setActive((prev) => prev + 1);
    } else if (swipe > 50 && active > 0) {
      setActive((prev) => prev - 1);
    }
  };

  return (
    <div className="overflow-hidden px-6">
      <div ref={dragRef} className="overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={dragRef}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          animate={{ x: `calc(-${active * 100}% - ${active * 16}px)` }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="flex gap-4"
        >
          {testimonials.map((t, i) => (
            <div key={t.name} className="w-full shrink-0">
              <TestimonialCard t={t} index={i} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Témoignage ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-zinc-900" : "w-1.5 bg-zinc-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Section ─── */

export default function Testimonials() {
  return (
    <section id="temoignages" className="scroll-mt-[100px] bg-white py-12 font-manrope lg:py-24">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center lg:mb-16 lg:px-8">
        <span className="inline-block rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold tracking-wide text-white">
          Nos Témoignages
        </span>
        <h2 className="mt-6 text-3xl font-light tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
          Nos clients témoignent
        </h2>
        <p className="mt-4 text-base leading-[1.7] text-zinc-500">
          Ils nous ont fait confiance. Découvrez leurs témoignages.
        </p>
      </div>

      {/* Desktop: Marquee */}
      <div className="hidden flex-col gap-6 md:flex">
        <MarqueeRow items={row1} direction="right" startIndex={0} />
        <MarqueeRow items={row2} direction="left" startIndex={5} />
      </div>

      {/* Mobile: Slider */}
      <div className="md:hidden">
        <MobileSlider />
      </div>
    </section>
  );
}

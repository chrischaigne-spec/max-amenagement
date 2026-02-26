"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutPanelLeft,
  Paintbrush,
  Bath,
  Fence,
  TreeDeciduous,
  Landmark,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as const;

interface Expertise {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  href: string;
}

const expertises: Expertise[] = [
  {
    title: "Maçonnerie & Structure",
    description:
      "Travaux de gros œuvre, murs de soutènement et assainissement.",
    image: "/images/services/maconnerie.webp",
    icon: Landmark,
    href: "/amenagement-exterieur#maconnerie",
  },
  {
    title: "Terrasses & Dallages Extérieurs",
    description:
      "Prolongez votre confort en plein air avec des aménagements paysagers uniques.",
    image: "/images/services/terrasse.webp",
    icon: Fence,
    href: "/amenagement-exterieur#terrasses",
  },
  {
    title: "Jardins & Paysages",
    description:
      "Conception et entretien d'espaces verts harmonieux et structurés.",
    image: "/images/services/jardin.webp",
    icon: TreeDeciduous,
    href: "/amenagement-exterieur#jardins",
  },
  {
    title: "Rénovation d'intérieurs",
    description:
      "Transformation complète de vos espaces de vie, du sol au plafond.",
    image: "/images/services/renovation.webp",
    icon: Paintbrush,
    href: "/amenagement-interieur#renovation",
  },
  {
    title: "Cuisines Sur-Mesure",
    description:
      "L'alliance parfaite entre ergonomie et esthétique haut de gamme.",
    image: "/images/services/cuisine.webp",
    icon: LayoutPanelLeft,
    href: "/amenagement-interieur#cuisines",
  },
  {
    title: "Salles de Bains & Bien-être",
    description:
      "Créez votre havre de paix avec des matériaux nobles et durables.",
    image: "/images/services/salle-de-bain.webp",
    icon: Bath,
    href: "/amenagement-interieur#salles-de-bains",
  },
];

/* ─── Desktop: Accordion + Sticky Image ─── */

function DesktopExpertises() {
  const [active, setActive] = useState(0);
  const current = expertises[active];

  const handleClick = (i: number) => {
    setActive(i === active ? active : i);
  };

  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16">
      {/* Left — Image matches accordion height */}
      <div className="relative overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easing }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
      </div>

      {/* Right — Accordion */}
      <div className="flex flex-col">
        {expertises.map((e, i) => {
          const isOpen = i === active;
          const Icon = e.icon;
          return (
            <div
              key={e.title}
              className="border-b border-zinc-200 last:border-b-0"
            >
              <button
                onClick={() => handleClick(i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className={`shrink-0 transition-colors duration-300 ${
                      isOpen ? "text-zinc-900" : "text-zinc-400"
                    }`}
                  />
                  <span
                    className={`text-lg transition-colors duration-300 ${
                      isOpen
                        ? "font-bold text-zinc-900"
                        : "font-semibold text-zinc-400 hover:text-zinc-600"
                    }`}
                  >
                    {e.title}
                  </span>
                </div>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "border-zinc-900 bg-zinc-900"
                      : "border-zinc-200 bg-transparent"
                  }`}
                >
                  {isOpen ? (
                    <Minus size={14} strokeWidth={2} className="text-white" />
                  ) : (
                    <Plus
                      size={14}
                      strokeWidth={1.5}
                      className="text-zinc-400"
                    />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: easing }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-[32px]">
                      <p className="text-sm leading-relaxed text-zinc-600">
                        {e.description}
                      </p>
                      <Link
                        href={e.href}
                        className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-900 px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105"
                      >
                        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-[#8B6542] via-[#C9956A] to-[#8B6542] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="relative z-10">Découvrir l&apos;expertise</span>
                        <ArrowRight
                          size={14}
                          strokeWidth={1.5}
                          className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Mobile (inchangé) ─── */

function MobileExpertises() {
  return (
    <div className="flex flex-col gap-6 lg:hidden">
      {expertises.map((e) => {
        const Icon = e.icon;
        return (
          <div
            key={e.title}
            className="overflow-hidden rounded-3xl border border-zinc-200 bg-white"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={e.image}
                alt={e.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <Icon size={18} strokeWidth={1.5} className="text-zinc-400" />
                <h3 className="text-base font-medium text-zinc-900">
                  {e.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {e.description}
              </p>
              <Link
                href={e.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900"
              >
                Découvrir l&apos;expertise
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Main Section ─── */

export default function Expertises() {
  return (
    <section className="bg-[#FAFAFA] py-24 font-manrope">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold tracking-wide text-white">
            Nos Expertises
          </span>
          <h2 className="mt-6 text-3xl font-light tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
            L&apos;Étendue de Notre Savoir-Faire
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.7] text-zinc-500">
            Du sur-mesure intérieur aux grands aménagements extérieurs, nous
            transformons chaque espace avec précision et passion.
          </p>
        </div>

        <DesktopExpertises />
        <MobileExpertises />
      </div>
    </section>
  );
}

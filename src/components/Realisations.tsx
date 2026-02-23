"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const easing = [0.22, 1, 0.36, 1] as const;

interface Project {
  image: string;
  title: string;
  description: React.ReactNode;
}

const projects: Project[] = [
  {
    image: "/images/realisations/projet-3.webp",
    title: "Entrée de propriété : Rénovation de l'accès à une maison",
    description: (
      <>
        L&apos;objectif ici était de transformer totalement l&apos;accès à la
        maison pour le rendre plus propre et fonctionnel. Nous avons réalisé le{" "}
        <strong>dallage en béton</strong> et la{" "}
        <strong>pose de pavés sur chape</strong> pour garantir une base solide.
        Pour fermer l&apos;espace, nous avons construit les{" "}
        <strong>murs de clôture</strong> avec des{" "}
        <strong>finitions en aluminium</strong>. L&apos;installation du{" "}
        <strong>portail</strong> et la pose d&apos;une{" "}
        <strong>moquette de pierre</strong> viennent finaliser cet extérieur
        pour un résultat propre, durable et facile d&apos;entretien.
      </>
    ),
  },
  {
    image: "/images/realisations/projet-2.webp",
    title: "Construction d'une piscine et aménagement des plages",
    description: (
      <>
        Ce chantier a commencé par le <strong>terrassement</strong> et
        l&apos;<strong>évacuation des terres</strong>, une étape technique
        réalisée malgré un <strong>accès restreint</strong>. Nous avons ensuite
        géré la <strong>construction de la piscine</strong> ainsi que la{" "}
        <strong>création des plages en béton</strong>. Le projet est finalisé
        par la <strong>pose des margelles</strong> et l&apos;application
        d&apos;une <strong>moquette de pierre</strong> sur les plages pour un
        résultat propre et résistant.
      </>
    ),
  },
  {
    image: "/images/realisations/projet-5.webp",
    title: "Aménagement d'une terrasse en bois exotique",
    description: (
      <>
        Ce projet visait à créer un espace extérieur chaleureux. Nous avons
        d&apos;abord réalisé le <strong>terrassement de la zone</strong> pour
        préparer le terrain, puis installé une{" "}
        <strong>structure en lambourdes</strong> traitées pour garantir la
        solidité de l&apos;ensemble. La pose de{" "}
        <strong>lames en bois exotique ITAUBA</strong> vient terminer ce
        chantier pour un résultat naturel et durable.
      </>
    ),
  },
  {
    image: "/images/realisations/projet-7.webp",
    title:
      "Aménagement d'un accès extérieur : Escalier en traverses paysagères",
    description: (
      <>
        L&apos;objectif de ce chantier était de créer un escalier et un accès
        périphérique autour de la maison. Nous avons commencé par le{" "}
        <strong>terrassement</strong> de la zone avant de procéder à la{" "}
        <strong>mise en place des traverses paysagères</strong> pour structurer
        le dénivelé. Le projet s&apos;est terminé par la{" "}
        <strong>remise en place des terres</strong>, offrant un cheminement
        propre et naturel au cœur du jardin.
      </>
    ),
  },
  {
    image: "/images/realisations/projet-4.webp",
    title: "Aménagement de terrain : Soutènement et terrasse en béton",
    description: (
      <>
        Ce chantier a nécessité une gestion précise du relief pour sécuriser les
        abords de la maison. Nous avons réalisé le{" "}
        <strong>terrassement</strong> complet et construit un{" "}
        <strong>mur de soutènement en béton</strong> pour maintenir les terres
        du garage. Le projet inclut également le{" "}
        <strong>coffrage et le coulage d&apos;une dalle béton</strong> pour la
        terrasse, ainsi qu&apos;un <strong>enrochement</strong> pour stabiliser
        l&apos;accès véhicule. La pose de{" "}
        <strong>garde-corps en aluminium</strong> vient sécuriser l&apos;ensemble
        pour un résultat robuste et fonctionnel.
      </>
    ),
  },
];

/* ─── Shared card content ─── */

function CardContent({ project }: { project: Project }) {
  return (
    <div className="grid flex-1 lg:grid-cols-[45%_1fr]">
      {/* Image — fills entire left column on desktop */}
      <div className="relative aspect-[16/10] lg:aspect-auto">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center p-8 lg:p-12">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-[1.8] text-zinc-600 [&>strong]:font-semibold [&>strong]:text-zinc-900 lg:text-base">
          {project.description}
        </p>

        {/* CTA — noir, survol gris clair */}
        <Link
          href="/#contact"
          className="group relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white border-0 outline-0 ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none hover:outline-none hover:ring-0"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span className="pointer-events-none absolute -inset-px rounded-full bg-zinc-200 origin-right scale-x-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100" />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-zinc-900">
            Parlons de votre projet
          </span>
          <ArrowRight
            size={18}
            strokeWidth={1.5}
            className="relative z-10 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:text-zinc-900"
          />
        </Link>
      </div>
    </div>
  );
}

/* ─── Mobile: Fade-in card variant ─── */

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
};

/* ─── Main Section ─── */

export default function Realisations() {
  return (
    <section id="realisations" className="scroll-mt-[100px] bg-[#FAFAFA] py-24 font-manrope">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold tracking-wide text-white">
            Nos Réalisations
          </span>
          <h2 className="mt-6 text-3xl font-light tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
            Vos espaces sur-mesure, conçus pour vous
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.7] text-zinc-500">
            Découvrez nos derniers projets
          </p>
        </div>
      </div>

      {/* Desktop — Sticky stacking */}
      <div className="mx-auto hidden max-w-7xl px-6 lg:block lg:px-8">
        {projects.map((p, i) => (
          <Fragment key={i}>
            <article
              className="sticky top-20 flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] min-h-[calc(100vh-5rem)]"
              style={{ zIndex: i + 1 }}
            >
              <CardContent project={p} />
            </article>
            <div className="h-[40vh]" />
          </Fragment>
        ))}
      </div>

      {/* Mobile — Vertical list with fade-in */}
      <div className="mx-auto max-w-7xl px-6 lg:hidden">
        <div className="flex flex-col gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <CardContent project={p} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

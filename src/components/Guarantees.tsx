"use client";

import { ShieldCheck, Handshake, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as const;

const guarantees = [
  {
    icon: ShieldCheck,
    title: "SÉRÉNITÉ DÉCENNALE",
    description:
      "Votre ouvrage est protégé pendant 10 ans par notre assurance MAAF. Une tranquillité d\u2019esprit totale pour vos projets structurels.",
  },
  {
    icon: Handshake,
    title: "PILOTAGE INTÉGRAL",
    description:
      "Un interlocuteur unique pour la coordination de tous les corps de métier. Nous gérons la complexité, vous profitez du résultat.",
  },
  {
    icon: Sparkles,
    title: "EXIGENCE CHANTIER",
    description:
      "Respect strict des délais d\u2019intervention et rendu impeccable avec nettoyage de fin de travaux inclus d\u2019office.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const bannerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Guarantees() {
  return (
    <section className="scroll-mt-[100px] bg-zinc-50 py-24 font-manrope lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900">
            Nos Garanties
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
            Des engagements concrets pour chaque projet que nous réalisons.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {guarantees.map((g) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: easing }}
                className="group h-full rounded-3xl bg-white p-8 shadow-sm transition-transform duration-300 hover:scale-[1.02] lg:p-10"
              >
                {/* Badge */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#C9A96E] transition-shadow duration-300 group-hover:shadow-[0_0_12px_rgba(201,169,110,0.4)]">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#C9A96E]"
                  />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">
                  {g.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {g.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Banner */}
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: easing, delay: 0.45 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto mb-6 max-w-md border-t border-zinc-200" />
          <p className="text-sm text-zinc-400">
            D&apos;office dans votre devis :{" "}
            <span className="font-semibold text-zinc-600">
              Conseils &amp; plans 3D
            </span>
            ,{" "}
            <span className="font-semibold text-zinc-600">
              suivi de chantier en temps réel
            </span>{" "}
            et{" "}
            <span className="font-semibold text-zinc-600">
              évacuation complète des gravats
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

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

export default function Guarantees() {
  return (
    <section className="scroll-mt-[100px] bg-zinc-50 pt-8 pb-16 font-manrope lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold tracking-wide text-white">
            Nos Garanties
          </span>
          <h2 className="mt-6 text-3xl font-light tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
            Nos engagements pour votre sérénité
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.7] text-zinc-500">
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

      </div>
    </section>
  );
}

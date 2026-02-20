"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";

const easing = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing },
  },
};


const titleWords =
  "L'art d'aménager votre habitat, de l'intérieur à vos espaces extérieurs.".split(" ");

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-44 pb-16 lg:pt-48">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-8">
        {/* Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 order-1"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easing }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-muted">
              <ShieldCheck size={14} strokeWidth={1.5} />
              Votre artisan de confiance dans les Monts du Lyonnais
            </span>
          </motion.div>

          {/* Staggered H1 */}
          <h1 className="mt-8 font-manrope text-4xl font-light leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={childVariants}
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            variants={childVariants}
            className="mt-6 max-w-lg text-base leading-[1.7] text-muted sm:text-lg"
          >
            De la conception à la réalisation, Max Aménagement sublime votre
            habitat avec rigueur et excellence. Chaque projet est une rencontre
            entre design, savoir-faire et durabilité.
          </motion.p>

          {/* CTA */}
          <motion.div variants={childVariants} className="mt-10">
            <AnimatedButton href="/#contact" label="Parlons de votre projet" />
          </motion.div>
        </motion.div>

        {/* Image — CSS animation only, no JS blocking LCP */}
        <div className="relative order-2 aspect-[4/5] w-full overflow-hidden rounded-3xl lg:aspect-auto animate-hero-image">
          <Image
            src="/images/hero/hero-home.webp"
            alt="Aménagement extérieur haut de gamme par Max Aménagement dans les Monts du Lyonnais"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

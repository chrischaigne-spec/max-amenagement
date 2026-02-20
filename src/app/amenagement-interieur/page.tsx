import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";

export const metadata: Metadata = {
  title: "Aménagement Intérieur | Cuisine, Rénovation & Salle de Bain — Max Aménagement",
  description:
    "Spécialiste de l'aménagement intérieur dans l'Ouest Lyonnais et les Monts du Lyonnais : cuisines sur-mesure, rénovation complète, salles de bains, cloisonnement, mezzanines et maîtrise d'œuvre. Intervention de Craponne à la Plaine du Forez.",
};

interface Service {
  id: string;
  title: string;
  description: React.ReactNode;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: "cuisines",
    title: "Création et rénovation de cuisines sur-mesure",
    description: (
      <>
        Votre cuisine mérite d&apos;être aussi fonctionnelle qu&apos;élégante.
        Nous concevons et réalisons des <strong>cuisines entièrement
        sur-mesure</strong>, de la <strong>réfection totale du sol au
        plafond</strong> jusqu&apos;à la pose des menuiseries et des{" "}
        <strong>finitions premium</strong>. En tant que{" "}
        <strong>maître d&apos;œuvre</strong>, nous coordonnons l&apos;ensemble
        des corps d&apos;état — plomberie, électricité, revêtements — pour un
        résultat clé en main. Nous intervenons dans les Monts du Lyonnais,
        l&apos;Ouest Lyonnais et jusqu&apos;à la Plaine du Forez.
      </>
    ),
    image: "/images/services/cuisine.webp",
    features: [
      "Réfection totale de la cuisine, du sol au plafond",
      "Pose de carrelage et revêtements de sol adaptés",
      "Plomberie et raccordements intégrés",
      "Mise en peinture et finitions premium",
    ],
  },
  {
    id: "renovation",
    title: "Rénovation complète d'intérieur et agencement",
    description: (
      <>
        Transformation intégrale de vos espaces de vie. Du{" "}
        <strong>cloisonnement en plaques de plâtre (Placo)</strong> à la{" "}
        <strong>création de mezzanines</strong> pour optimiser vos volumes, nous
        prenons en charge l&apos;ensemble de votre <strong>rénovation
        intérieure</strong>. <strong>Remise en état des murs</strong>, mise en
        peinture, <strong>pose de parquet ou carrelage</strong> et{" "}
        <strong>menuiseries intérieures</strong> : chaque détail est maîtrisé.
        Notre rôle de <strong>maître d&apos;œuvre</strong> nous permet de gérer,
        organiser et planifier l&apos;ensemble des corps d&apos;état pour une{" "}
        <strong>remise à neuf complète</strong> de votre habitat, de Craponne
        aux Monts du Lyonnais.
      </>
    ),
    image: "/images/services/renovation.webp",
    features: [
      "Cloisonnement et création de cloisons séparatives en Placo",
      "Création de mezzanines pour optimiser les volumes",
      "Réfection de sols : pose de carrelage et parquet",
      "Mise en peinture et pose de menuiseries intérieures",
    ],
  },
  {
    id: "salles-de-bains",
    title: "Rénovation complète de salle de bain",
    description: (
      <>
        Transformez votre salle de bains en un véritable espace de bien-être.
        Nous réalisons la <strong>réfection totale de vos salles de
        bains</strong>, du sol au plafond. <strong>Plomberie
        complète</strong>, <strong>carrelage et faïence sur-mesure</strong>,
        remise en état des murs et <strong>finitions premium</strong> : nous
        gérons l&apos;intégralité du chantier en tant que{" "}
        <strong>maître d&apos;œuvre</strong> pour un résultat durable et
        élégant. Nous intervenons dans tout l&apos;Ouest Lyonnais, la Loire et
        les Monts du Lyonnais.
      </>
    ),
    image: "/images/services/salle-de-bain.webp",
    features: [
      "Réfection totale du sol au plafond",
      "Plomberie complète et raccordements",
      "Carrelage, faïence et revêtements sur-mesure",
      "Remise en état des murs et finitions premium",
    ],
  },
];

export default function AmenagementInterieur() {
  return (
    <div className="font-manrope">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-black pt-40 pb-16 lg:min-h-[60vh] lg:pt-48 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="inline-block rounded-full bg-[#27272A] px-4 py-1.5 text-xs font-medium tracking-wide text-white">
            Nos Expertises
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Aménagement Intérieur
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-zinc-400 lg:text-lg">
            Expertise et passion au service de vos projets en Rhône-Alpes.
            Rénovation, agencement et maîtrise d&apos;œuvre pour chaque pièce de
            votre habitat, des Monts du Lyonnais à l&apos;Ouest Lyonnais en
            passant par la Plaine du Forez.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => {
        const reversed = i % 2 !== 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-[100px] ${
              i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div
                className={`grid gap-10 py-16 lg:min-h-[calc(100vh-100px)] lg:grid-cols-2 lg:gap-16 lg:py-0 ${
                  reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-3xl lg:my-12 lg:aspect-auto ${
                    reversed ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div
                  className={`flex flex-col justify-between pb-8 lg:py-12 ${
                    reversed ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h2>

                    <p className="mt-6 text-base leading-[1.8] text-zinc-600 [&>strong]:font-semibold [&>strong]:text-zinc-900">
                      {service.description}
                    </p>

                    <ul className="mt-8 flex flex-col gap-3.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900">
                            <Check
                              size={12}
                              strokeWidth={2.5}
                              className="text-white"
                            />
                          </span>
                          <span className="text-sm font-medium leading-relaxed text-zinc-700">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/#contact"
                      className="group relative inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white border-0 outline-0 ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none hover:outline-none hover:ring-0"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <span className="pointer-events-none absolute -inset-px rounded-full bg-zinc-200 origin-right scale-x-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100" />
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-zinc-900">
                        Demander un devis
                      </span>
                      <ArrowRight
                        size={18}
                        strokeWidth={1.5}
                        className="relative z-10 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:text-zinc-900"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA bottom — floating card */}
      <section className="bg-white py-8">
        <div className="mx-auto mb-20 max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#0F0F0F] px-6 py-14 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Votre projet d&apos;aménagement intérieur dans l&apos;Ouest Lyonnais
            </h2>
            <p className="mt-4 text-base leading-[1.8] text-zinc-400">
              Cuisine, salle de bain, rénovation complète ou création de
              mezzanine : contactez-nous pour en discuter. Nous intervenons des
              Monts du Lyonnais jusqu&apos;à la Plaine du Forez et la Loire.
            </p>
            <div className="mt-8 flex justify-center">
              <AnimatedButton
                href="/#contact"
                label="Parlons de votre projet"
              />
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

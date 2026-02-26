import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";

export const metadata: Metadata = {
  title: "Aménagement Extérieur | Terrasses, Enrochement & Maçonnerie — Max Aménagement",
  description:
    "Expert en aménagement extérieur dans l'Ouest Lyonnais et les Monts du Lyonnais : terrasses bois et dallage, enrochement de soutènement, maçonnerie de structure, microstations d'épuration et aménagement paysager. Intervention de Craponne à la Plaine du Forez.",
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
    id: "terrasses",
    title: "Construction de terrasses et revêtements extérieurs",
    description: (
      <>
        Prolongez votre espace de vie en plein air avec des terrasses conçues
        pour durer. Nous réalisons la construction et la rénovation de{" "}
        <strong>terrasses en bois, dalles sur plots ou béton</strong>. Nous
        posons également du <strong>carrelage extérieur</strong>, de la{" "}
        <strong>pierre naturelle</strong> et de la{" "}
        <strong>moquette de pierre en granulat de marbre</strong> pour des sols
        esthétiques et résistants. Notre secteur d&apos;intervention couvre les
        Monts du Lyonnais, l&apos;Ouest Lyonnais et la Plaine du Forez.
      </>
    ),
    image: "/images/services/terrasse.webp",
    features: [
      "Terrasses en bois, dalles sur plots et béton",
      "Pose de carrelage et pierre naturelle",
      "Application de moquette de pierre (granulat de marbre)",
      "Margelles et finitions sur-mesure",
    ],
  },
  {
    id: "jardins",
    title: "Aménagement paysager, réseaux et structures bois",
    description: (
      <>
        Nous créons des <strong>espaces extérieurs sur-mesure</strong> dans tout
        l&apos;Ouest Lyonnais : du terrassement à la construction de{" "}
        <strong>carports et structures bois</strong> couvertes. Nous intervenons
        également sur l&apos;<strong>assainissement</strong> avec la pose de{" "}
        <strong>microstations d&apos;épuration</strong>, de{" "}
        <strong>cuves de récupération d&apos;eau de pluie</strong> et la
        création de <strong>tranchées pour les réseaux VRD</strong> (eaux,
        électricité). De Craponne et Lozanne aux Monts du Lyonnais, nous
        adaptons chaque projet à votre terrain.
      </>
    ),
    image: "/images/services/jardin.webp",
    features: [
      "Création d'espaces verts sur-mesure",
      "Construction de carports et structures bois",
      "Pose de microstations d'épuration et cuves de récupération",
      "Tranchées pour réseaux : eaux et électricité (VRD)",
    ],
  },
  {
    id: "maconnerie",
    title: "Maçonnerie extérieure, soutènement et enrochement",
    description: (
      <>
        Tous les travaux de gros œuvre et de structure pour sécuriser et
        aménager vos extérieurs. Nous réalisons des{" "}
        <strong>enrochements de soutènement</strong> robustes par empilement de
        blocs rocheux, des <strong>murs de soutènement en béton
        banché</strong>, des solutions en <strong>gabions</strong> ou{" "}
        <strong>parois berlinoises</strong>, ainsi que la{" "}
        <strong>construction de murs, d&apos;escaliers extérieurs et de
        dallages béton</strong>. Nous prenons également en charge la{" "}
        <strong>modification ou création d&apos;ouvertures dans murs
        porteurs</strong>. Intervention dans les Monts du Lyonnais, l&apos;Ouest
        Lyonnais et jusqu&apos;à la Loire.
      </>
    ),
    image: "/images/services/maconnerie.webp",
    features: [
      "Enrochement de soutènement par blocs rocheux",
      "Murs de soutènement : béton banché, gabions, parois berlinoises",
      "Construction de murs, escaliers extérieurs et dallages béton",
      "Modification ou création d'ouvertures dans murs porteurs",
    ],
  },
];

export default function AmenagementExterieur() {
  return (
    <div className="font-manrope">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-black pt-40 pb-16 lg:min-h-[60vh] lg:pt-48 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="inline-block rounded-full bg-[#27272A] px-5 py-2 text-sm font-semibold tracking-wide text-white">
            Nos Expertises
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Aménagement Extérieur
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-zinc-400 lg:text-lg">
            Votre projet d&apos;aménagement dans l&apos;Ouest Lyonnais et la
            Loire. Terrasses, enrochement, maçonnerie de structure et
            aménagement paysager : nous intervenons des Monts du Lyonnais
            jusqu&apos;à la Plaine du Forez.
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
                      <span className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-r from-[#8B6542] via-[#C9956A] to-[#8B6542] origin-right scale-x-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100" />
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        Demander un devis
                      </span>
                      <ArrowRight
                        size={18}
                        strokeWidth={1.5}
                        className="relative z-10 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:text-white"
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
                Votre projet d&apos;aménagement extérieur dans l&apos;Ouest Lyonnais
              </h2>
              <p className="mt-4 text-base leading-[1.8] text-zinc-400">
                Terrasse, enrochement de soutènement, assainissement ou
                aménagement paysager : contactez-nous pour en discuter. Nous
                intervenons des Monts du Lyonnais jusqu&apos;à la Loire et la
                Plaine du Forez.
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

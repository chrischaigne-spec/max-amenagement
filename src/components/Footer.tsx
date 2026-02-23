import Link from "next/link";
import { Instagram } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";

const services = [
  [
    { label: "Cuisines Sur-Mesure", href: "/amenagement-interieur#cuisines" },
    { label: "Rénovation d'intérieurs", href: "/amenagement-interieur#renovation" },
    { label: "Salles de Bains & Bien-être", href: "/amenagement-interieur#salles-de-bains" },
  ],
  [
    { label: "Terrasses & Dallages Extérieurs", href: "/amenagement-exterieur#terrasses" },
    { label: "Jardins & Paysages", href: "/amenagement-exterieur#jardins" },
    { label: "Maçonnerie & Structure", href: "/amenagement-exterieur#maconnerie" },
  ],
];

const siteLinks = [
  { href: "/amenagement-interieur", label: "Intérieur" },
  { href: "/amenagement-exterieur", label: "Extérieur" },
  { href: "/#a-propos", label: "À Propos" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#temoignages", label: "Avis" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white font-manrope">
      <div className="mx-2 sm:mx-4 lg:mx-8">
        <div className="rounded-t-[3rem] bg-[#0F0F0F] px-6 pb-8 pt-16 sm:px-10 lg:px-16 lg:pt-20">
          {/* ─── Grid ─── */}
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
              {/* Col 1 — Identité & Contact */}
              <div className="flex flex-col gap-6">
                <p className="text-2xl font-bold text-white lg:text-3xl">
                  Max Aménagement
                </p>

                <div className="flex flex-col gap-2 text-sm leading-relaxed text-zinc-400">
                  <p>
                    1355 Route de Duerne
                    <br />
                    69610 AVEIZE
                  </p>
                  <a
                    href="mailto:amenagement.max@gmail.com"
                    className="transition-colors hover:text-white"
                  >
                    amenagement.max@gmail.com
                  </a>
                  <a
                    href="tel:0658696940"
                    className="transition-colors hover:text-white"
                  >
                    06.58.69.69.40
                  </a>
                  {/* SIRET — à compléter */}
                  <p className="text-zinc-600">&nbsp;</p>
                </div>

                <div className="w-fit">
                  <AnimatedButton
                    href="/#contact"
                    label="Devis Gratuit"
                    compact
                  />
                </div>

                <a
                  href="https://www.instagram.com/Max_amenagement"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Max Aménagement"
                  className="mt-1 inline-flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-white/70"
                >
                  <Instagram size={22} strokeWidth={1.5} />
                </a>
              </div>

              {/* Col 2 — Services (intérieur) */}
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">
                  Nos Services
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {services[0].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 — Services (extérieur) */}
              <div>
                {/* Spacer to align with col 2 on desktop */}
                <p className="hidden text-sm font-bold uppercase tracking-wider text-white lg:block">
                  &nbsp;
                </p>
                <ul className="mt-0 flex flex-col gap-3 lg:mt-5">
                  {services[1].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 4 — Navigation */}
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">
                  Le Site
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {siteLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ─── Bottom bar ─── */}
            <div className="mt-16 border-t border-white/10 pt-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-xs text-zinc-500">
                  &copy; 2026 Max Aménagement. Tous droits réservés.
                </p>
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <Link
                    href="/mentions-legales"
                    className="transition-colors hover:text-white"
                  >
                    Mentions légales
                  </Link>
                  <span className="text-zinc-700">|</span>
                  <span>
                    Créé par{" "}
                    <a
                      href="https://esprit-digital.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      esprit-digital
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

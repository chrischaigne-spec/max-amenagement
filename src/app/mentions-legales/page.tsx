import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — Max Aménagement",
  description:
    "Mentions légales du site Max Aménagement : éditeur, hébergement, propriété intellectuelle et gestion des données personnelles.",
};

const sections = [
  {
    title: "Éditeur du site",
    content: (
      <dl className="grid gap-3 sm:grid-cols-[180px_1fr]">
        {[
          ["Entreprise", "Max Aménagement"],
          ["Responsable de publication", "Maxime"],
          ["Siège social", "1355 Route de Duerne, 69610 AVEIZE"],
          ["SIRET", "982 279 598 00014"],
          [
            "Contact",
            <>
              <a href="tel:0658696940" className="underline underline-offset-2 hover:text-zinc-900">06.58.69.69.40</a>
              {" / "}
              <a href="mailto:amenagement.max@gmail.com" className="underline underline-offset-2 hover:text-zinc-900">amenagement.max@gmail.com</a>
            </>,
          ],
        ].map(([label, value]) => (
          <div key={String(label)} className="contents">
            <dt className="font-semibold text-zinc-900">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    title: "Hébergement",
    content: (
      <p>
        Le site est hébergé par <strong className="text-zinc-900">Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
      </p>
    ),
  },
  {
    title: "Propriété intellectuelle",
    content: (
      <p>
        L&apos;ensemble du contenu présent sur ce site (textes, logos, photographies, illustrations et éléments graphiques) est la propriété exclusive de Max Aménagement. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.
      </p>
    ),
  },
  {
    title: "Gestion des données personnelles",
    content: (
      <p>
        Les informations collectées via le formulaire de contact sont uniquement destinées au traitement de votre demande de devis. Elles ne sont jamais cédées à des tiers. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données en contactant <a href="mailto:amenagement.max@gmail.com" className="underline underline-offset-2 hover:text-zinc-900">amenagement.max@gmail.com</a>.
      </p>
    ),
  },
];

export default function MentionsLegales() {
  return (
    <div className="font-manrope">
      {/* Hero */}
      <section className="bg-black pt-40 pb-16 lg:pt-48 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Mentions Légales
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-zinc-900">{s.title}</h2>
                <div className="mt-4 text-sm leading-[1.8] text-zinc-600 [&_strong]:font-semibold">
                  {s.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

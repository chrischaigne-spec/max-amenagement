import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Expertises from "@/components/Expertises";
import About from "@/components/About";
import Realisations from "@/components/Realisations";
import Guarantees from "@/components/Guarantees";
import Contact from "@/components/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Max Aménagement",
  url: "https://max-amenagement.fr",
  logo: "https://max-amenagement.fr/branding/logo-max-amenagement.png",
  image: "https://max-amenagement.fr/branding/logo-max-amenagement.png",
  description:
    "Artisan spécialiste de la rénovation intérieure, terrasses, aménagement extérieur et maçonnerie dans les Monts du Lyonnais, l'Ouest Lyonnais et la Loire.",
  telephone: "+33652756498",
  email: "contact@max-amenagement.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1355 Route de Duerne",
    addressLocality: "Aveize",
    postalCode: "69610",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.6308,
    longitude: 4.4639,
  },
  taxID: "93249227600014",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Monts du Lyonnais" },
    { "@type": "AdministrativeArea", name: "Ouest Lyonnais" },
    { "@type": "AdministrativeArea", name: "Loire" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "27",
    reviewCount: "27",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "19:00",
  },
  priceRange: "€€",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Testimonials />
      <Expertises />
      <About />
      <Realisations />
      <Guarantees />
      <Contact />
    </>
  );
}

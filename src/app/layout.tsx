import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title:
    "LAZOX - Espacio Lúdico de Logoterapia Familiar | Fortaleciendo Vínculos Familiares",
  description:
    "LAZOX es un espacio lúdico especializado en logoterapia familiar que combina juego y terapia para fortalecer lazos familiares. Ofrecemos logoteca, talleres para padres e hijos, acompañamiento terapéutico y actividades de desarrollo emocional en Ciudad de México.",
  keywords: [
    "logoterapia",
    "terapia familiar",
    "espacio lúdico",
    "desarrollo emocional",
    "talleres padres hijos",
    "logoteca",
    "vínculos familiares",
    "Ciudad de México",
    "CDMX",
    "crecimiento personal",
    "valores familiares",
    "acompañamiento terapéutico",
    "juegos educativos",
    "sentido de vida",
  ],
  authors: [{ name: "Dra. Rosa Adelaida Del Valle Puente" }],
  creator: "Semilleros de Sentido A.C.",
  publisher: "LAZOX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lazox.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LAZOX - Espacio Lúdico de Logoterapia Familiar",
    description:
      "Fortalecemos vínculos familiares a través de logoterapia y juego. Logoteca, talleres, acompañamiento terapéutico y más en Ciudad de México.",
    url: "https://lazox.com",
    siteName: "LAZOX",
    images: [
      {
        url: "/logo-main.svg",
        width: 1200,
        height: 630,
        alt: "LAZOX - Espacio Lúdico de Logoterapia Familiar",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAZOX - Espacio Lúdico de Logoterapia Familiar",
    description:
      "Fortalecemos vínculos familiares a través de logoterapia y juego en Ciudad de México.",
    images: ["/logo-main.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Reemplazar con el código real
  },
  category: "Health & Wellness",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "LAZOX - Espacio Lúdico de Logoterapia Familiar",
              description:
                "Espacio lúdico especializado en logoterapia familiar que combina juego y terapia para fortalecer lazos familiares.",
              url: "https://lazox.com",
              telephone: "+52-55-3017-9924",
              email: "rossy@semillerosdesentido.org",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calz. de Tlalpan 1552, Miravalle",
                addressLocality: "Benito Juárez",
                addressRegion: "Ciudad de México",
                postalCode: "03580",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.3910",
                longitude: "-99.1677",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "$$",
              servedCuisine: [],
              serviceArea: {
                "@type": "City",
                name: "Ciudad de México",
              },
              founder: {
                "@type": "Person",
                name: "Dra. Rosa Adelaida Del Valle Puente",
              },
              sameAs: ["https://www.semillerosdesentido.org"],
            }),
          }}
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

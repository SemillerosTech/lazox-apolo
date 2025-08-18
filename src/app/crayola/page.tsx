import Head from "next/head";
import HeroSection from "./components/HeroSection";
import ValueProposition from "./components/ValueProposition";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import TrustBadges from "./components/TrustBadges";
import HeaderCrayola from "./components/HeaderCrayola";

const page = () => {
  const pageTitle = "Didacti - Productos Crayola Originales al Mejor Precio";
  const pageDescription =
    "Productos Crayola 100% originales al precio más bajo de la ciudad. 40 años sirviendo a familias como la tuya.";
  const canonicalUrl = "https://tudominio.com/crayola";
  const siteName = "Didacti";
  const twitterHandle = "@DidactiEcuador"; // Reemplaza con tu handle real

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        {/* Metadatos básicos */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://tudominio.com/images/crayola-social-share.jpg"
        />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://tudominio.com/images/crayola-social-share.jpg"
        />

        {/* Schema.org para Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            publisher: {
              "@type": "Organization",
              name: siteName,
              logo: {
                "@type": "ImageObject",
                url: "https://tudominio.com/logo.png",
              },
            },
          })}
        </script>

        {/* Metadatos adicionales */}
        <meta
          name="keywords"
          content="Crayola, productos escolares, materiales didácticos, artículos de arte, crayones, marcadores, precio bajo, originales"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <HeaderCrayola />
        <HeroSection />
        <TrustBadges />
        <ValueProposition />
        <FeaturedProducts />
        <Testimonials />
        <FinalCTA />
      </main>
    </div>
  );
};

export default page;

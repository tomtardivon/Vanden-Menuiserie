import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/footer/Footer";
import { SimplePageTransition } from "@/components/ui/simple-page-transition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Vanden Menuiserie | Artisan Menuisier dans le Var - Cuisines, Escaliers, Dressings",
  description: "Vanden Menuiserie, votre artisan menuisier professionnel dans le Var depuis 1985. Spécialisé en cuisines sur mesure, escaliers, dressings et menuiseries. ✆ 07 62 14 43 40",
  keywords: [
    "menuisier",
    "menuiserie",
    "var",
    "toulon",
    "hyères",
    "cuisine sur mesure",
    "escalier bois",
    "dressing",
    "artisan",
    "ébéniste"
  ],
  authors: [{ name: "Vanden Menuiserie" }],
  creator: "Mattias Vanden",
  publisher: "Vanden Menuiserie",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://vanden-menuiserie.fr",
    siteName: "Vanden Menuiserie",
    title: "Vanden Menuiserie | Artisan Menuisier dans le Var",
    description: "Artisan menuisier professionnel dans le Var depuis 1985. Créateur de cuisines sur mesure, escaliers, dressings et menuiseries d'exception.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vanden Menuiserie - Artisan Menuisier Var",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanden Menuiserie | Artisan Menuisier dans le Var",
    description: "Artisan menuisier professionnel dans le Var depuis 1985. Spécialisé en cuisines sur mesure, escaliers et dressings.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vanden-menuiserie.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-whitout-background.png" />
        <link rel="apple-touch-icon" href="/logo-whitout-background.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-whitout-background.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-whitout-background.png" />
        <meta name="theme-color" content="#1E2B39" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Carpenter",
              "name": "Vanden Menuiserie",
              "image": "https://vanden-menuiserie.fr/logo.jpg",
              "url": "https://vanden-menuiserie.fr",
              "telephone": "+33762144340",
              "priceRange": "€€€",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toulon",
                "addressRegion": "Var",
                "postalCode": "83000",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.124228,
                "longitude": 5.928000
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "50"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100089014670678",
                "https://www.instagram.com/vandenmenuiserie"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-body antialiased`}
      >
        <Navigation />
        <SimplePageTransition type="fade">
          {children}
        </SimplePageTransition>
        <Footer />
      </body>
    </html>
  );
}

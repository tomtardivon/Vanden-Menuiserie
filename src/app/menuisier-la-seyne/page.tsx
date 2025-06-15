import { Metadata } from 'next';
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";

export const metadata: Metadata = {
  title: "Menuisier à La Seyne-sur-Mer (83500) | Vanden Menuiserie - Devis Gratuit",
  description: "Vanden Menuiserie, votre menuisier professionnel à La Seyne-sur-Mer. Projets familiaux, rangements optimisés, espaces enfants. 2 ans d'expérience dans le Var. Devis gratuit ☎ 07 62 14 43 40",
  keywords: [
    "menuisier la seyne sur mer",
    "cuisine familiale la seyne",
    "rangement la seyne",
    "menuiserie la seyne",
    "artisan menuisier la seyne",
    "ébéniste la seyne",
    "chambre enfant la seyne",
    "famille la seyne"
  ],
  openGraph: {
    title: "Menuisier La Seyne-sur-Mer - Vanden Menuiserie",
    description: "Artisan menuisier à La Seyne-sur-Mer depuis 2022. Spécialisé en projets familiaux, rangements optimisés et espaces enfants.",
    images: ["/og/menuisier-la-seyne.jpg"],
    url: "https://vanden-menuiserie.fr/menuisier-la-seyne",
  },
  alternates: {
    canonical: "https://vanden-menuiserie.fr/menuisier-la-seyne",
  },
};

export default function MenuisierLaSeyne() {
  return (
    <main className="relative pt-18">
        {/* Hero Section La Seyne-sur-Mer */}
        <section className="relative min-h-[70vh] flex items-center bg-beige-moderne">
          <div className="absolute inset-0 wood-grain opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blanc-casse/80 border border-gris-doux/50 rounded-full px-4 py-2 mb-6">
                  <span className="text-sm font-medium text-bleu-marine">📍 La Seyne-sur-Mer (83500)</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-bleu-marine mb-6">
                  Menuisier Professionnel 
                  <span className="block text-brun-bois">à La Seyne-sur-Mer</span>
                </h1>
                
                <p className="text-xl text-bleu-marine/80 mb-8 leading-relaxed">
                  Vanden Menuiserie, votre artisan menuisier de confiance à La Seyne-sur-Mer depuis 2 ans. 
                  Spécialisé dans les solutions familles, rangements optimisés et espaces enfants.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-brun-bois hover:bg-brun-bois-dark text-blanc-casse px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-colors">
                    Devis Gratuit à La Seyne
                  </button>
                  <a 
                    href="tel:0762144340" 
                    className="border-2 border-bleu-marine text-bleu-marine hover:bg-bleu-marine hover:text-blanc-casse px-8 py-4 rounded-full font-semibold text-lg transition-all text-center"
                  >
                    ☎ 07 62 14 43 40
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gris-perle rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-heading font-bold text-bleu-marine mb-6">
                    Nos Services à La Seyne-sur-Mer
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Projets familiaux adaptés à tous les âges",
                      "Rangements optimisés pour maisons familiales",
                      "Espaces enfants sécurisés et ludiques",
                      "Cuisines conviviales pour grandes familles",
                      "Solutions de stockage intelligent pour jouets et vêtements"
                    ].map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-brun-bois rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-bleu-marine/80">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu Local Unique */}
        <section className="py-20 px-4 bg-blanc-casse">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-bleu-marine mb-8">
              Votre Menuisier à La Seyne-sur-Mer, Ville Familiale
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-bleu-marine/80 leading-relaxed mb-6">
                Vanden Menuiserie intervient à La Seyne-sur-Mer et ses quartiers depuis 2022. 
                Nous comprenons parfaitement les besoins des familles seynoises et créons des solutions 
                sur mesure qui facilitent le quotidien de chacun.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-brun-bois mb-4">
                Spécialiste Solutions Famille
              </h3>
              <p className="text-bleu-marine/80 leading-relaxed mb-6">
                Notre expertise familiale nous permet de concevoir des aménagements qui évoluent avec vos enfants. 
                De la chambre de bébé au bureau d'adolescent, nous créons des espaces fonctionnels et 
                sécurisés qui grandissent avec votre famille.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-brun-bois mb-4">
                Zone d'Intervention autour de La Seyne-sur-Mer
              </h3>
              <p className="text-bleu-marine/80 leading-relaxed mb-4">
                Nous intervenons dans tout le secteur de La Seyne-sur-Mer et ses environs :
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-bleu-marine/70 mb-6">
                <li>• Centre-ville de La Seyne</li>
                <li>• Les Sablettes</li>
                <li>• Mar Vivo</li>
                <li>• Tamaris</li>
                <li>• Six-Fours-les-Plages</li>
                <li>• Ollioules</li>
                <li>• Sanary-sur-Mer</li>
                <li>• Bandol</li>
                <li>• Le Beausset</li>
              </ul>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ProjectsGallery />
      
      {/* Schema LocalBusiness pour La Seyne-sur-Mer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Carpenter",
            "name": "Vanden Menuiserie",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "La Seyne-sur-Mer",
              "addressRegion": "Var",
              "postalCode": "83500",
              "addressCountry": "FR"
            },
            "serviceArea": {
              "@type": "City",
              "name": "La Seyne-sur-Mer"
            },
            "telephone": "+33762144340",
            "url": "https://vanden-menuiserie.fr/menuisier-la-seyne",
            "priceRange": "€€€",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "2"
            }
          })
        }}
      />
    </main>
  );
}
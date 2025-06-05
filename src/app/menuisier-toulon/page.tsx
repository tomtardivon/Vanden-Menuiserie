import { Metadata } from 'next';
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";

export const metadata: Metadata = {
  title: "Menuisier à Toulon (83000) | Vanden Menuiserie - Devis Gratuit",
  description: "Vanden Menuiserie, votre menuisier professionnel à Toulon. Cuisines sur mesure, escaliers, fenêtres. 35 ans d'expérience dans le Var. Devis gratuit ☎ 07 62 14 43 40",
  keywords: [
    "menuisier toulon",
    "cuisine sur mesure toulon",
    "escalier bois toulon",
    "menuiserie toulon",
    "artisan menuisier toulon",
    "ébéniste toulon",
    "dressing toulon",
    "fenêtre bois toulon"
  ],
  openGraph: {
    title: "Menuisier Toulon - Vanden Menuiserie",
    description: "Artisan menuisier à Toulon depuis 1985. Spécialisé en cuisines sur mesure, escaliers et menuiseries.",
    images: ["/og/menuisier-toulon.jpg"],
    url: "https://vanden-menuiserie.fr/menuisier-toulon",
  },
  alternates: {
    canonical: "https://vanden-menuiserie.fr/menuisier-toulon",
  },
};

export default function MenuisierToulon() {
  return (
    <main className="relative pt-20">
        {/* Hero Section Toulon */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-beige-clair to-blanc-casse">
          <div className="absolute inset-0 wood-grain opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blanc-casse/80 border border-gris-doux/50 rounded-full px-4 py-2 mb-6">
                  <span className="text-sm font-medium text-bleu-marine">📍 Toulon (83000)</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-bleu-marine mb-6">
                  Menuisier Professionnel 
                  <span className="block text-brun-bois">à Toulon</span>
                </h1>
                
                <p className="text-xl text-bleu-marine/80 mb-8 leading-relaxed">
                  Vanden Menuiserie, votre artisan menuisier de confiance à Toulon depuis plus de 35 ans. 
                  Spécialisé dans la création de cuisines sur mesure, escaliers et menuiseries d'exception.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-brun-bois hover:bg-brun-bois-dark text-blanc-casse px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-colors">
                    Devis Gratuit à Toulon
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
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-heading font-bold text-bleu-marine mb-6">
                    Nos Services à Toulon
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Cuisines équipées sur mesure adaptées aux intérieurs toulonnais",
                      "Escaliers et garde-corps pour maisons de ville",
                      "Fenêtres et volets pour résistance au climat méditerranéen",
                      "Dressings optimisés pour appartements toulonnais",
                      "Rénovation menuiseries anciennes du centre historique"
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
              Votre Menuisier à Toulon, capitale du Var
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-bleu-marine/80 leading-relaxed mb-6">
                Vanden Menuiserie intervient à Toulon et ses environs depuis plus de 35 ans. 
                Nous connaissons parfaitement les spécificités architecturales de la région toulonnaise, 
                des maisons provençales du centre historique aux villas contemporaines des hauteurs de Toulon.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-brun-bois mb-4">
                Expertise Locale Toulonnaise
              </h3>
              <p className="text-bleu-marine/80 leading-relaxed mb-6">
                Notre connaissance approfondie du patrimoine architectural toulonnais nous permet de proposer 
                des solutions parfaitement adaptées, que ce soit pour la rénovation d'un appartement dans le 
                quartier historique ou l'aménagement d'une villa moderne au Mont Faron.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-brun-bois mb-4">
                Zone d'Intervention autour de Toulon
              </h3>
              <p className="text-bleu-marine/80 leading-relaxed mb-4">
                Nous intervenons dans tout le secteur de Toulon et communes limitrophes :
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-bleu-marine/70 mb-6">
                <li>• Centre-ville de Toulon</li>
                <li>• Mont Faron</li>
                <li>• La Garde</li>
                <li>• Le Pradet</li>
                <li>• Ollioules</li>
                <li>• La Valette-du-Var</li>
                <li>• La Seyne-sur-Mer</li>
                <li>• Six-Fours-les-Plages</li>
                <li>• Sanary-sur-Mer</li>
              </ul>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ProjectsGallery />
      
      {/* Schema LocalBusiness pour Toulon */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Carpenter",
            "name": "Vanden Menuiserie",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toulon",
              "addressRegion": "Var",
              "postalCode": "83000",
              "addressCountry": "FR"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Toulon"
            },
            "telephone": "+33762144340",
            "url": "https://vanden-menuiserie.fr/menuisier-toulon",
            "priceRange": "€€€",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "50"
            }
          })
        }}
      />
    </main>
  );
}
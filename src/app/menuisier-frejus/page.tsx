import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menuisier Fréjus | Vanden Menuiserie - Artisan Professionnel",
  description: "Menuisier professionnel à Fréjus. Vanden Menuiserie vous accompagne dans tous vos projets de menuiserie : cuisines, dressings, escaliers. Devis gratuit.",
  keywords: "menuisier fréjus, menuiserie fréjus, cuisine sur mesure fréjus, artisan bois fréjus",
};

export default function MenuisierFrejusPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-center">
          Menuisier à Fréjus
        </h1>
        <p className="text-xl text-bleu-marine/70 mb-8 text-center leading-relaxed">
          Votre artisan menuisier de confiance à Fréjus et ses environs. 
          Spécialisé dans la création de menuiseries sur mesure depuis 1985.
        </p>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Nos services à Fréjus</h2>
          <ul className="space-y-2">
            <li>• Cuisines sur mesure</li>
            <li>• Dressings et placards</li>
            <li>• Escaliers en bois</li>
            <li>• Terrasses et pergolas</li>
            <li>• Menuiseries intérieures et extérieures</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">Zone d&apos;intervention</h2>
          <p>Nous intervenons à Fréjus et dans toutes les communes environnantes du Var.</p>
          
          <div className="mt-12 text-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-bleu-marine text-white rounded-full hover:bg-brun-bois transition-colors"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
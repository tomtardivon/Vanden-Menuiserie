import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Vanden Menuiserie",
  description: "Mentions légales de Vanden Menuiserie, artisan menuisier dans le Var.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
          Mentions légales
        </h1>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Identification de l&apos;entreprise</h2>
            <p>
              <strong>Nom de l&apos;entreprise :</strong> Vanden Menuiserie<br />
              <strong>Forme juridique :</strong> Entreprise individuelle<br />
              <strong>Dirigeant :</strong> Mattias Vanden<br />
              <strong>Adresse :</strong> Var (83), France<br />
              <strong>Téléphone :</strong> 07 62 14 43 40<br />
              <strong>Email :</strong> contact@vanden-menuiserie.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Activité</h2>
            <p>
              Vanden Menuiserie est spécialisée dans la menuiserie sur mesure : cuisines, dressings, 
              escaliers, terrasses et toutes menuiseries intérieures et extérieures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Hébergement du site</h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriété de Vanden Menuiserie, 
              sauf mention contraire. Toute reproduction sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Responsabilité</h2>
            <p>
              Vanden Menuiserie s&apos;efforce de maintenir les informations de ce site à jour et exactes. 
              Cependant, nous ne pouvons garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
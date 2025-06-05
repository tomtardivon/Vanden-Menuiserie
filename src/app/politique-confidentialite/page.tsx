import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Vanden Menuiserie",
  description: "Politique de confidentialité et protection des données de Vanden Menuiserie.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
          Politique de confidentialité
        </h1>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Collecte des données</h2>
            <p>
              Vanden Menuiserie collecte uniquement les données personnelles que vous nous transmettez 
              volontairement via notre formulaire de contact : nom, email, téléphone et message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Utilisation des données</h2>
            <p>
              Vos données personnelles sont utilisées exclusivement pour :
            </p>
            <ul>
              <li>Répondre à vos demandes de devis</li>
              <li>Vous contacter concernant nos services</li>
              <li>Vous envoyer des informations sur nos réalisations (avec votre accord)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Conservation des données</h2>
            <p>
              Vos données sont conservées pendant une durée de 3 ans maximum à compter du dernier contact, 
              sauf obligation légale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit d&apos;effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : contact@vanden-menuiserie.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p>
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
              Aucun cookie de tracking ou publicitaire n&apos;est utilisé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, 
              contactez-nous au 07 62 14 43 40 ou à contact@vanden-menuiserie.fr
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
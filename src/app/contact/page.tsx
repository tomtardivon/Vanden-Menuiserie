import { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Vanden Menuiserie - Devis Gratuit",
  description: "Contactez Vanden Menuiserie pour vos projets de menuiserie sur mesure dans le Var. Devis gratuit sous 24h. ✆ 07 62 14 43 40",
  keywords: "contact menuisier var, devis menuiserie, menuisier toulon contact, devis gratuit menuiserie",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
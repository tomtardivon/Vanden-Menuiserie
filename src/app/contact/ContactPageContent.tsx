"use client";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Téléphone",
    content: "07 62 14 43 40",
    href: "tel:0762144340"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "contact@vanden-menuiserie.fr",
    href: "mailto:contact@vanden-menuiserie.fr"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Zone d'intervention",
    content: "Tout le Var (83)",
    href: null
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Horaires",
    content: "Lun-Ven : 8h-18h",
    href: null
  }
];

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 pt-32 md:pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              Parlons de votre projet ensemble. 
              Devis gratuit sous 24h pour tous vos projets de menuiserie sur mesure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gris-perle">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-8">
                Demander un devis gratuit
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-bleu-marine/80 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-bleu-marine/80 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-bleu-marine/80 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-bleu-marine/80 mb-2">
                    Type de projet *
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="cuisine">Cuisine sur mesure</option>
                    <option value="dressing">Dressing & Placards</option>
                    <option value="escalier">Escalier & Garde-corps</option>
                    <option value="terrasse">Terrasse & Pergola</option>
                    <option value="autre">Autre projet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-bleu-marine/80 mb-2">
                    Décrivez votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    placeholder="Donnez-nous plus de détails sur votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-bleu-marine text-white py-4 rounded-lg hover:bg-brun-bois transition-colors font-semibold"
                >
                  Envoyer ma demande
                </button>

                <p className="text-sm text-bleu-marine/70 text-center">
                  * Champs obligatoires. Réponse garantie sous 24h.
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold mb-8">
                  Informations de contact
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-bleu-marine/70 hover:text-bleu-marine transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-bleu-marine/70">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Zone d'intervention */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Zone d'intervention</h3>
                <p className="text-bleu-marine/70 mb-4">
                  Nous intervenons dans tout le département du Var (83) :
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-bleu-marine/70">
                  <div>• Toulon</div>
                  <div>• Hyères</div>
                  <div>• Fréjus</div>
                  <div>• Saint-Raphaël</div>
                  <div>• La Seyne-sur-Mer</div>
                  <div>• Six-Fours</div>
                  <div>• Draguignan</div>
                  <div>• Et plus...</div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-brun-bois text-white rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Réponse rapide garantie</h3>
                <p className="mb-6">
                  Pour une urgence ou un projet urgent, n'hésitez pas à nous appeler directement.
                </p>
                <a
                  href="tel:0762144340"
                  className="inline-flex items-center bg-beige-moderne text-bleu-marine px-6 py-3 rounded-lg hover:bg-gris-perle transition-colors font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  07 62 14 43 40
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-bleu-marine/50 mx-auto mb-4" />
            <p className="text-bleu-marine/70">Zone d'intervention : Tout le Var (83)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
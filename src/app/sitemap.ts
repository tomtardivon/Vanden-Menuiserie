import { MetadataRoute } from 'next'

const villes = [
  'toulon', 
  'hyeres', 
  'frejus', 
  'la-seyne-sur-mer', 
  'draguignan', 
  'six-fours-les-plages',
  'sanary-sur-mer',
  'bandol',
  'le-pradet',
  'ollioules',
  'la-garde',
  'sollies-pont',
  'la-crau',
  'saint-mandrier-sur-mer'
];

const services = [
  'cuisine-sur-mesure', 
  'dressing-placards', 
  'escaliers-bois', 
  'fenetres-portes',
  'terrasses-pergolas'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vanden-menuiserie.fr';
  
  // Pages statiques principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  // Pages services détaillées
  const servicePages = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Pages villes pour SEO local
  const villePages = villes.map(ville => ({
    url: `${baseUrl}/menuisier-${ville}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Pages projets (exemple avec quelques projets)
  const projetPages = [
    'cuisine-chene-hyeres',
    'escalier-noyer-toulon',
    'dressing-moderne-frejus',
    'terrasse-cumaru-seyne',
    'bibliotheque-draguignan'
  ].map(projet => ({
    url: `${baseUrl}/realisations/${projet}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...villePages, ...projetPages];
}
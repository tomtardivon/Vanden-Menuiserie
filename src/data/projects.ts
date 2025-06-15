export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'cuisine' | 'dressing' | 'placard' | 'porte' | 'meuble' | 'parquet' | 'autre';
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'cave-a-vins-sur-mesure',
    title: 'Cave à vins sur mesure',
    description: 'Conception et fabrication d\'une cave à vins sur mesure avec système de climatisation intégré',
    category: 'meuble',
    images: [
      '/projet/cave-a-vins-sur-mesure/cave-vins-vue-ensemble.jpg',
      '/projet/cave-a-vins-sur-mesure/cave-vins-detail-rangement.jpg',
      '/projet/cave-a-vins-sur-mesure/cave-vins-eclairage.jpg',
      '/projet/cave-a-vins-sur-mesure/cave-vins-finition.jpg',
      '/projet/cave-a-vins-sur-mesure/cave-vins-bouteilles.jpg',
      '/projet/cave-a-vins-sur-mesure/cave-vins-complete.jpg'
    ],
    featured: true
  },
  {
    id: 'cuisine-moderne-1',
    title: 'Cuisine moderne avec îlot central',
    description: 'Réalisation complète d\'une cuisine moderne avec îlot central et finitions haut de gamme',
    category: 'cuisine',
    images: [
      '/projet/cuisine/cuisine-moderne-ilot.jpg',
      '/projet/cuisine/cuisine-moderne-plan-travail.jpg',
      '/projet/cuisine/cuisine-moderne-rangements.jpg',
      '/projet/cuisine/cuisine-moderne-electromenager.jpg'
    ],
    featured: true
  },
  {
    id: 'cuisine-contemporaine-2',
    title: 'Cuisine contemporaine',
    description: 'Aménagement d\'une cuisine contemporaine avec optimisation de l\'espace',
    category: 'cuisine',
    images: [
      '/projet/cuisine2/cuisine-contemporaine-vue-generale.jpg',
      '/projet/cuisine2/cuisine-contemporaine-details.jpg',
      '/projet/cuisine2/cuisine-contemporaine-finitions.jpg'
    ]
  },
  {
    id: 'cuisine-familiale-3',
    title: 'Cuisine familiale chaleureuse',
    description: 'Création d\'une cuisine familiale avec espace repas intégré',
    category: 'cuisine',
    images: [
      '/projet/cuisine3/cuisine-familiale-ensemble.jpg',
      '/projet/cuisine3/cuisine-familiale-coin-repas.jpg',
      '/projet/cuisine3/cuisine-familiale-rangements.jpg'
    ]
  },
  {
    id: 'cuisine-design-4',
    title: 'Cuisine design épurée',
    description: 'Installation d\'une cuisine au design épuré avec lignes minimalistes',
    category: 'cuisine',
    images: [
      '/projet/cuisine4/cuisine-design-vue.jpg',
      '/projet/cuisine4/cuisine-design-details.jpg'
    ]
  },
  {
    id: 'cuisine-traditionnelle-5',
    title: 'Cuisine traditionnelle',
    description: 'Aménagement d\'une cuisine traditionnelle avec matériaux nobles',
    category: 'cuisine',
    images: [
      '/projet/cuisine5/cuisine-traditionnelle-generale.jpg',
      '/projet/cuisine5/cuisine-traditionnelle-details.jpg',
      '/projet/cuisine5/cuisine-traditionnelle-finitions.jpg'
    ]
  },
  {
    id: 'cuisine-compacte-6',
    title: 'Cuisine compacte optimisée',
    description: 'Conception d\'une cuisine compacte avec solutions de rangement ingénieuses',
    category: 'cuisine',
    images: [
      '/projet/cuisine6/cuisine-compacte-vue.jpg',
      '/projet/cuisine6/cuisine-compacte-rangements.jpg',
      '/projet/cuisine6/cuisine-compacte-details.jpg'
    ]
  },
  {
    id: 'dressing-sur-mesure-1',
    title: 'Dressing sur mesure',
    description: 'Création d\'un dressing sur mesure avec aménagements personnalisés',
    category: 'dressing',
    images: [
      '/projet/dressing/dressing-sur-mesure-vue.jpg',
      '/projet/dressing/dressing-sur-mesure-rangements.jpg',
      '/projet/dressing/dressing-sur-mesure-details.jpg'
    ],
    featured: true
  },
  {
    id: 'dressing-chambre-2',
    title: 'Dressing intégré chambre',
    description: 'Installation d\'un dressing intégré dans une chambre avec miroirs',
    category: 'dressing',
    images: [
      '/projet/dressing2/dressing-chambre-ensemble.jpg',
      '/projet/dressing2/dressing-chambre-miroirs.jpg',
      '/projet/dressing2/dressing-chambre-finitions.jpg'
    ]
  },
  {
    id: 'dressing-moderne-3',
    title: 'Dressing moderne avec éclairage LED',
    description: 'Aménagement d\'un dressing moderne avec système d\'éclairage LED intégré',
    category: 'dressing',
    images: [
      '/projet/dressing3/dressing-moderne-led.jpg',
      '/projet/dressing3/dressing-moderne-organisation.jpg',
      '/projet/dressing3/dressing-moderne-details.jpg',
      '/projet/dressing3/dressing-moderne-complet.jpg'
    ]
  },
  {
    id: 'dressing-compact-4',
    title: 'Dressing compact optimisé',
    description: 'Conception d\'un dressing compact avec optimisation maximale de l\'espace',
    category: 'dressing',
    images: [
      '/projet/dressing4/dressing-compact-vue.jpg',
      '/projet/dressing4/dressing-compact-details.jpg'
    ]
  },
  {
    id: 'dressing-luxe-5',
    title: 'Dressing de luxe',
    description: 'Réalisation d\'un dressing haut de gamme avec finitions premium',
    category: 'dressing',
    images: [
      '/projet/dressing5/dressing-luxe-ensemble.jpg',
      '/projet/dressing5/dressing-luxe-details.jpg',
      '/projet/dressing5/dressing-luxe-accessoires.jpg',
      '/projet/dressing5/dressing-luxe-finitions.jpg'
    ]
  },
  {
    id: 'bibliotheque-sur-mesure',
    title: 'Bibliothèque sur mesure',
    description: 'Création d\'une bibliothèque sur mesure en bois massif',
    category: 'meuble',
    images: [
      '/projet/bibliotheque/bibliotheque-complete.jpg',
      '/projet/bibliotheque/bibliotheque-details.jpg',
      '/projet/bibliotheque/bibliotheque-finitions.jpg'
    ]
  },
  {
    id: 'meuble-cave-vins-integre',
    title: 'Meuble avec cave à vins intégrée',
    description: 'Conception et pose d\'un meuble intégrant une cave à vins',
    category: 'meuble',
    images: [
      '/projet/meuble-cave-vins-integre/meuble-cave-ensemble.jpg',
      '/projet/meuble-cave-vins-integre/meuble-cave-details.jpg',
      '/projet/meuble-cave-vins-integre/meuble-cave-ouvert.jpg',
      '/projet/meuble-cave-vins-integre/meuble-cave-finitions.jpg'
    ]
  },
  {
    id: 'meuble-vasque-salle-bain',
    title: 'Meuble vasque suspendu',
    description: 'Installation d\'un meuble vasque suspendu avec miroir assorti',
    category: 'meuble',
    images: [
      '/projet/meuble-vasque-miroir/meuble-vasque-ensemble.jpg',
      '/projet/meuble-vasque-miroir/meuble-vasque-details.jpg'
    ]
  },
  {
    id: 'meuble-vasque-moderne',
    title: 'Meuble vasque moderne',
    description: 'Création d\'un meuble vasque moderne avec rangements intégrés',
    category: 'meuble',
    images: [
      '/projet/meuble-vasque/meuble-vasque-moderne.jpg',
      '/projet/meuble-vasque/meuble-vasque-rangements.jpg'
    ]
  },
  {
    id: 'meubles-hauts-cuisine',
    title: 'Meubles hauts de cuisine',
    description: 'Installation de meubles hauts de cuisine avec système d\'ouverture soft-close',
    category: 'cuisine',
    images: [
      '/projet/meubles-haut-cuisine/meubles-hauts-fermes.jpg',
      '/projet/meubles-haut-cuisine/meubles-hauts-ouverts.jpg',
      '/projet/meubles-haut-cuisine/meubles-hauts-details.jpg'
    ]
  },
  {
    id: 'parquet-massif-65m2',
    title: 'Pose parquet massif 65m²',
    description: 'Pose de 65m² de parquet massif avec plinthes et barres de seuil',
    category: 'parquet',
    images: [
      '/projet/parquet-65m2/parquet-salon.jpg',
      '/projet/parquet-65m2/parquet-detail-pose.jpg',
      '/projet/parquet-65m2/parquet-finition.jpg',
      '/projet/parquet-65m2/parquet-plinthes.jpg',
      '/projet/parquet-65m2/parquet-barre-seuil.jpg',
      '/projet/parquet-65m2/parquet-vue-ensemble.jpg'
    ],
    featured: true
  },
  {
    id: 'placard-sur-mesure',
    title: 'Placard sur mesure',
    description: 'Création de placards sur mesure avec aménagements intérieurs',
    category: 'placard',
    images: [
      '/projet/placard/placard-ferme.jpg',
      '/projet/placard/placard-ouvert.jpg',
      '/projet/placard/placard-amenagements.jpg',
      '/projet/placard/placard-details.jpg',
      '/projet/placard/placard-finitions.jpg'
    ]
  },
  {
    id: 'placard-dressing-integre',
    title: 'Placard dressing intégré',
    description: 'Installation d\'un placard dressing avec portes coulissantes',
    category: 'dressing',
    images: [
      '/projet/placard-dressing/placard-dressing-ferme.jpg',
      '/projet/placard-dressing/placard-dressing-ouvert.jpg',
      '/projet/placard-dressing/placard-dressing-interieur.jpg',
      '/projet/placard-dressing/placard-dressing-details.jpg',
      '/projet/placard-dressing/placard-dressing-complet.jpg'
    ]
  },
  {
    id: 'dressing-portes-coulissantes',
    title: 'Dressing avec portes coulissantes',
    description: 'Montage dressing et pose de portes coulissantes doubles',
    category: 'dressing',
    images: [
      '/projet/dressing-portes-coulissantes/dressing-coulissant-ferme.jpg',
      '/projet/dressing-portes-coulissantes/dressing-coulissant-ouvert.jpg',
      '/projet/dressing-portes-coulissantes/dressing-coulissant-details.jpg'
    ]
  },
  {
    id: 'porte-style-verriere',
    title: 'Porte style verrière',
    description: 'Installation d\'une porte style verrière pour séparation d\'espaces',
    category: 'porte',
    images: [
      '/projet/porte-style-verriere/porte-verriere-vue.jpg',
      '/projet/porte-style-verriere/porte-verriere-details.jpg',
      '/projet/porte-style-verriere/porte-verriere-finitions.jpg'
    ],
    featured: true
  },
  {
    id: 'porte-galandage',
    title: 'Porte à galandage',
    description: 'Installation d\'une porte à galandage pour gain de place',
    category: 'porte',
    images: [
      '/projet/porte-galandage/porte-galandage-fermee.jpg',
      '/projet/porte-galandage/porte-galandage-ouverte.jpg',
      '/projet/porte-galandage/porte-galandage-details.jpg'
    ]
  },
  {
    id: 'porte-bois-vitree',
    title: 'Porte en bois vitrée',
    description: 'Pose d\'une porte en bois avec vitrage pour luminosité',
    category: 'porte',
    images: [
      '/projet/porte-bois-vitree/porte-vitree-ensemble.jpg',
      '/projet/porte-bois-vitree/porte-vitree-details.jpg',
      '/projet/porte-bois-vitree/porte-vitree-finitions.jpg'
    ]
  },
  {
    id: 'portes-exterieures',
    title: 'Portes extérieures',
    description: 'Installation de portes extérieures haute sécurité',
    category: 'porte',
    images: [
      '/projet/portes-exterieures/porte-exterieure-principale.jpg',
      '/projet/portes-exterieures/porte-exterieure-details.jpg',
      '/projet/portes-exterieures/porte-exterieure-finitions.jpg'
    ]
  },
  {
    id: 'portes-interieures',
    title: 'Portes intérieures',
    description: 'Remplacement complet des portes intérieures',
    category: 'porte',
    images: [
      '/projet/portes-interieures/porte-interieure-chambre.jpg',
      '/projet/portes-interieures/porte-interieure-salon.jpg',
      '/projet/portes-interieures/porte-interieure-details.jpg',
      '/projet/portes-interieures/porte-interieure-poignee.jpg'
    ]
  },
  {
    id: 'porte-garage-renovation',
    title: 'Rénovation porte de garage',
    description: 'Rénovation complète d\'une porte de garage',
    category: 'porte',
    images: [
      '/projet/porte-garage-renovation/porte-garage-avant.jpg',
      '/projet/porte-garage-renovation/porte-garage-apres.jpg'
    ]
  },
  {
    id: 'grille-defense',
    title: 'Grille de défense',
    description: 'Installation de grilles de défense sur mesure',
    category: 'autre',
    images: [
      '/projet/grille-defense/grille-defense-vue.jpg',
      '/projet/grille-defense/grille-defense-details.jpg',
      '/projet/grille-defense/grille-defense-finitions.jpg'
    ]
  },
  {
    id: 'agencement-tabac-monaco',
    title: 'Agencement tabac Monaco',
    description: 'Agencement complet d\'un bureau de tabac à Monaco',
    category: 'autre',
    images: [
      '/projet/tabac-monaco/tabac-monaco-comptoir.jpg',
      '/projet/tabac-monaco/tabac-monaco-presentoirs.jpg',
      '/projet/tabac-monaco/tabac-monaco-rangements.jpg',
      '/projet/tabac-monaco/tabac-monaco-details.jpg',
      '/projet/tabac-monaco/tabac-monaco-ensemble.jpg'
    ],
    featured: true
  },
  {
    id: 'agencement-tabac',
    title: 'Agencement bureau de tabac',
    description: 'Agencement complet d\'un bureau de tabac avec mobilier sur mesure',
    category: 'autre',
    images: [
      '/projet/tabac/tabac-comptoir-principal.jpg',
      '/projet/tabac/tabac-presentoirs.jpg',
      '/projet/tabac/tabac-etageres.jpg',
      '/projet/tabac/tabac-details.jpg',
      '/projet/tabac/tabac-vue-ensemble.jpg'
    ]
  }
];

export const featuredProjects = projects.filter(p => p.featured);

export const projectCategories = [
  { id: 'tous', label: 'Tous les projets' },
  { id: 'cuisine', label: 'Cuisines' },
  { id: 'dressing', label: 'Dressings' },
  { id: 'placard', label: 'Placards' },
  { id: 'porte', label: 'Portes' },
  { id: 'meuble', label: 'Meubles' },
  { id: 'parquet', label: 'Parquets' },
  { id: 'autre', label: 'Autres' }
];
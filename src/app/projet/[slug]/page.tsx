import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { ProjectPageContent } from '@/components/pages/ProjectPageContent';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    return {
      title: 'Projet non trouvé - Vanden Menuiserie',
    };
  }

  return {
    title: `${project.title} | Vanden Menuiserie - Réalisation sur mesure`,
    description: project.description,
    keywords: [
      project.category,
      'menuiserie sur mesure',
      'artisan menuisier',
      'var 83',
      'vanden menuiserie',
      project.title.toLowerCase()
    ],
    openGraph: {
      title: `${project.title} - Vanden Menuiserie`,
      description: project.description,
      images: project.images.length > 0 ? [project.images[0]] : [],
      url: `https://vanden-menuiserie.fr/projet/${project.id}`,
    },
    alternates: {
      canonical: `https://vanden-menuiserie.fr/projet/${project.id}`,
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageContent project={project} />;
}
import { readdirSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import GalleryPageView, {
  type PortfolioCategory,
} from "@/components/pages/GalleryPageView";

// Les catégories sont indexées au rendu statique à partir du dossier public.

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "La galerie de Patrice Wilfrid : mariage, mode, portrait, beauté et défilé.",
};

const categoryDefinitions = [
  {
    slug: "mariage",
    title: "Mariage",
    eyebrow: "Émotions & célébrations",
    description:
      "Des préparatifs à la fête, des histoires de couple racontées avec spontanéité, élégance et lumière.",
    projects: [
      {
        directory: "Mariage Christophe & Sandra",
        title: "Christophe & Sandra",
        featured: "31122013-DSC_6500.jpg",
      },
      {
        directory: "Mariage Marvin&Gwen",
        title: "Marvin & Gwen",
        featured: "_DSC7503.jpg",
      },
      {
        directory: "Mariage Ryan & Emilia",
        title: "Ryan & Emilia",
        featured: "DSC_4469.jpg",
      },
      {
        directory: "Mariage Gina & Lionel",
        title: "Gina & Lionel",
        featured: "DSC_4730.jpg",
      },
      {
        directory: "Mariage Mr & Mme Nilor",
        title: "Monsieur & Madame Nilor",
        featured: "06082022-DSC_8558.jpg",
      },
    ],
  },
  {
    slug: "mode",
    title: "Mode",
    eyebrow: "Silhouettes & création",
    description:
      "Des séries de mode où les matières, les lignes et les décors composent une image forte et contemporaine.",
    projects: [
      {
        directory: "PHOTOSHOOT_BALCON FOUQUET_Keti CHKHIKVADZE",
        title: "Keti à Paris",
        featured: "56350715_2171518479600737_8280280446529437696_n.jpg",
      },
      {
        directory: "MAISON ALEXANDRO FRATELLI",
        title: "Alexandro Fratelli",
        featured: "_DSC8086.JPG",
      },
    ],
  },
  {
    slug: "portrait",
    title: "Portrait",
    eyebrow: "Présence & caractère",
    description:
      "Des portraits personnels et éditoriaux pensés autour du regard, du geste et de la personnalité de chacun.",
    projects: [
      {
        directory: "PHOTOSHOOT BOOK RONALD CHERY",
        title: "Ronald Chery",
        featured: "prise de vue sans titre-5990 INSTA CHERY_RONALD.jpg",
      },
      {
        directory: "ALE VINI  POUR FRANCE ANTILLES",
        title: "Alé Vini pour France-Antilles",
        featured: "PHOTOSHOOT_ALE_VINI-5792.jpg",
      },
      {
        directory: "",
        title: "Patrice Wilfrid",
        featured: "04122025-_DSC0025.jpg",
      },
    ],
  },
  {
    slug: "beaute-produit",
    title: "Beauté & produit",
    eyebrow: "Matières & détails",
    description:
      "Des images de campagne où le produit dialogue avec la lumière, les textures et une mise en scène précise.",
    projects: [
      {
        directory: "PHOTOSHOOT PACKSHOOT ET MODE  PARFUMERIE GANTIER",
        title: "Parfumerie Gantier",
        featured: "26032019-Shooting photo packshot Maitre Ganthier 148.jpg",
      },
    ],
  },
  {
    slug: "defile",
    title: "Défilé",
    eyebrow: "Passages & mouvement",
    description:
      "Le rythme du podium, les volumes et les couleurs saisis dans l’instant au cœur de la Fashion Week parisienne.",
    projects: [
      {
        directory: "DEFILE GUERLAIN 2020 PFW",
        title: "Guerlain — Paris Fashion Week",
        featured: "22012020-DEFILE PARIS FASHION WEEK GUERLAIN 2021 108.jpg",
      },
    ],
  },
] as const;

const supportedExtensions = /\.(jpe?g|png|webp|avif)$/i;

function buildCategories(): PortfolioCategory[] {
  const photoRoot = path.join(process.cwd(), "public", "web", "photoo");
  const collator = new Intl.Collator("fr", { numeric: true });

  return categoryDefinitions.map((category) => ({
    slug: category.slug,
    title: category.title,
    eyebrow: category.eyebrow,
    description: category.description,
    photos: category.projects.flatMap((project) => {
      const directoryPath = project.directory
        ? path.join(photoRoot, project.directory)
        : photoRoot;
      const files = readdirSync(directoryPath, { withFileTypes: true })
        .filter((entry) => entry.isFile() && supportedExtensions.test(entry.name))
        .map((entry) => entry.name)
        .sort((first, second) => {
          if (first === project.featured) return -1;
          if (second === project.featured) return 1;
          return collator.compare(first, second);
        });

      return files.map((file, index) => ({
        src: `/web/photoo/${[project.directory, file]
          .filter(Boolean)
          .map(encodeURIComponent)
          .join("/")}`,
        alt: `${project.title}, photographie ${index + 1}`,
        project: project.title,
      }));
    }),
  }));
}

export default function GalleryPage() {
  return (
    <main>
      <GalleryPageView categories={buildCategories()} />
    </main>
  );
}

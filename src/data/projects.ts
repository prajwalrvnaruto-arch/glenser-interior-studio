export interface Project {
  id: string;
  title: string;
  location: string;
  category: "Residential" | "Commercial" | "Apartment";
  area: string;
  year: string;
  brief: string;
  outcome: string;
  cover: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "contemporary-bengaluru-residence",
    title: "Contemporary Bengaluru Residence",
    location: "Whitefield, Bengaluru",
    category: "Residential",
    area: "3,400 sq. ft.",
    year: "2025",
    brief:
      "A ground-floor residence for a young family, designed around warm minimalism — layered oak, travertine and soft neutrals that turn long Bangalore days into golden light.",
    outcome:
      "Open-plan living, a modular kitchen with city views and a serene master suite, delivered as a complete turnkey interior.",
    cover: "/assets/portfolio/project01-lux-living.png",
    images: [
      "/assets/portfolio/project01-lux-living.png",
      "/assets/portfolio/project01-living.png",
      "/assets/portfolio/project01-kitchen.png",
      "/assets/portfolio/project01-bedroom.png",
      "/assets/portfolio/project01-console.png",
    ],
  },
  {
    id: "japandi-apartment",
    title: "Japandi Apartment",
    location: "Koramangala, Bengaluru",
    category: "Apartment",
    area: "1,850 sq. ft.",
    year: "2025",
    brief:
      "Japanese restraint meets Scandinavian warmth in this 3 BHK — low furniture, natural materials and a dining space made for slow Sunday mornings.",
    outcome:
      "A calm, clutter-free apartment with custom storage that disappears behind oak and paper-laminated surfaces.",
    cover: "/assets/portfolio/project02-living.png",
    images: [
      "/assets/portfolio/project02-living.png",
      "/assets/portfolio/project02-dining.png",
      "/assets/portfolio/project02-kitchen.png",
      "/assets/portfolio/project02-bedroom.png",
    ],
  },
  {
    id: "contemporary-villa",
    title: "Contemporary Villa",
    location: "Sarjapur Road, Bengaluru",
    category: "Residential",
    area: "5,200 sq. ft.",
    year: "2024",
    brief:
      "A double-height villa living room with sculptural lighting and a dining sanctuary — architecture and interiors resolved as one continuous composition.",
    outcome:
      "A gallery-like private residence designed for entertaining, fusing warm minimalism with monumental space.",
    cover: "/assets/portfolio/project03-villa.png",
    images: [
      "/assets/portfolio/project03-villa.png",
      "/assets/portfolio/project03-sunlit.png",
      "/assets/portfolio/project03-dining.png",
    ],
  },
  {
    id: "boutique-office",
    title: "Boutique Office",
    location: "Indiranagar, Bengaluru",
    category: "Commercial",
    area: "2,100 sq. ft.",
    year: "2024",
    brief:
      "A studio office for a creative team — a warm reception lobby that feels like home, a biophilic work floor, and a focused conference room.",
    outcome:
      "A productivity-first yet welcoming workspace, blending acoustic comfort with a strong brand identity.",
    cover: "/assets/portfolio/project04-reception.png",
    images: [
      "/assets/portfolio/project04-reception.png",
      "/assets/portfolio/project04-office.png",
      "/assets/portfolio/project04-conference.png",
    ],
  },
  {
    id: "indiranagar-bhk",
    title: "1 BHK Apartment",
    location: "Indiranagar, Bengaluru",
    category: "Apartment",
    area: "1,080 sq. ft.",
    year: "2024",
    brief:
      "An efficient, beautifully planned 1 BHK for a young professional — every inch of storage planned before a single finish was chosen.",
    outcome:
      "A bright, low-maintenance home with a full-height wardrobe system, a compact modular kitchen and a restful child's room.",
    cover: "/assets/portfolio/bhk-living.webp",
    images: [
      "/assets/portfolio/bhk-living.webp",
      "/assets/portfolio/bhk-kitchen.webp",
      "/assets/portfolio/bhk-bathroom.webp",
      "/assets/portfolio/bhk-kids.webp",
    ],
  },
];
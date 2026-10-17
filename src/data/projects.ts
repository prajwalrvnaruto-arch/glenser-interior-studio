export interface Project {
  id: string;
  title: string;
  location: string;
  category: "Residential" | "Commercial" | "Apartment" | "Farmhouse";
  area: string;
  year: string;
  brief: string;
  outcome: string;
  cover: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  /* ── Residential ─────────────────────────────────────────────── */
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
    cover: "/assets/portfolio/project01-lux-living.webp",
    images: [
      "/assets/portfolio/project01-lux-living.webp",
      "/assets/portfolio/project01-living.webp",
      "/assets/portfolio/project01-kitchen.webp",
      "/assets/portfolio/project01-bedroom.webp",
      "/assets/portfolio/project01-console.webp",
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
    cover: "/assets/portfolio/project03-villa.webp",
    images: [
      "/assets/portfolio/project03-villa.webp",
      "/assets/portfolio/project03-sunlit.webp",
      "/assets/portfolio/project03-dining.webp",
    ],
  },
  {
    id: "serene-villa-devanahalli",
    title: "Serene Villa — Devanahalli",
    location: "Devanahalli, Bengaluru",
    category: "Residential",
    area: "4,800 sq. ft.",
    year: "2024",
    brief:
      "A G+1 family villa nestled in North Bengaluru, planned around cross-ventilation, double-height volumes and a seamless indoor-outdoor connect.",
    outcome:
      "A home that feels expansive yet intimate — three bedroom suites, a family study, and a terraced garden.",
    cover: "/assets/portfolio/arch/isometric-villa.jpg",
    images: [
      "/assets/portfolio/arch/isometric-villa.jpg",
      "/assets/portfolio/arch/plan-2d.jpg",
      "/assets/portfolio/arch/floor-plan-3d.jpg",
    ],
  },
  {
    id: "yelahanka-modern-home",
    title: "Yelahanka Modern Home",
    location: "Yelahanka, Bengaluru",
    category: "Residential",
    area: "2,600 sq. ft.",
    year: "2025",
    brief:
      "A compact yet generous home for a young couple — designed with an open kitchen, a study alcove and a south-facing sun deck.",
    outcome:
      "Every centimetre planned — clever storage, maximised natural light and a warm palette that grows with the family.",
    cover: "/assets/portfolio/project01-living.webp",
    images: [
      "/assets/portfolio/project01-living.webp",
      "/assets/portfolio/project01-bedroom.webp",
      "/assets/portfolio/project01-kitchen.webp",
    ],
  },
  {
    id: "bannerghatta-residence",
    title: "Bannerghatta Residence",
    location: "Bannerghatta Road, Bengaluru",
    category: "Residential",
    area: "3,100 sq. ft.",
    year: "2024",
    brief:
      "A hillside residence that brings the forest in — perforated stone screens, local timber and a pool terrace that opens toward the treeline.",
    outcome:
      "A biophilic retreat within the city, completed within an eight-month timeline and precise budget.",
    cover: "/assets/portfolio/project03-sunlit.webp",
    images: [
      "/assets/portfolio/project03-sunlit.webp",
      "/assets/portfolio/project03-villa.webp",
      "/assets/portfolio/arch/plan-2d.jpg",
    ],
  },
  {
    id: "kengeri-family-villa",
    title: "Kengeri Family Villa",
    location: "Kengeri, Bengaluru",
    category: "Residential",
    area: "3,750 sq. ft.",
    year: "2023",
    brief:
      "Three generations sharing one roof — a villa designed to accommodate independence and togetherness at once.",
    outcome:
      "Separate living zones for the grandparents, parents and children, unified by a shared courtyard and kitchen.",
    cover: "/assets/portfolio/project01-bedroom.webp",
    images: [
      "/assets/portfolio/project01-bedroom.webp",
      "/assets/portfolio/project01-console.webp",
      "/assets/portfolio/arch/isometric-villa.jpg",
    ],
  },

  /* ── Farmhouse ────────────────────────────────────────────────── */
  {
    id: "mysuru-eco-farmhouse",
    title: "Mysuru Eco Farmhouse",
    location: "Mysuru Highway, Karnataka",
    category: "Farmhouse",
    area: "6,000 sq. ft. on 1.5 acres",
    year: "2025",
    brief:
      "An eco-sensitive weekend retreat — rammed-earth walls, solar-passive design and rainwater harvesting on a working mango orchard.",
    outcome:
      "A farmhouse that produces as much as it consumes; energy-neutral living with timeless local craft.",
    cover: "/assets/portfolio/arch/pencil-farmhouse.jpg",
    images: [
      "/assets/portfolio/arch/pencil-farmhouse.jpg",
      "/assets/portfolio/arch/isometric-villa.jpg",
      "/assets/portfolio/arch/plan-2d.jpg",
    ],
  },
  {
    id: "chikkaballapur-weekend-home",
    title: "Chikkaballapur Weekend Home",
    location: "Chikkaballapur, Karnataka",
    category: "Farmhouse",
    area: "4,200 sq. ft. on 2 acres",
    year: "2024",
    brief:
      "A family retreat blending stone-rubble walls with contemporary interiors — a fireplace lounge, open-air dining and a lap pool.",
    outcome:
      "A weekend destination that hosts family and guests through the year, built in 11 months.",
    cover: "/assets/portfolio/project03-villa.webp",
    images: [
      "/assets/portfolio/project03-villa.webp",
      "/assets/portfolio/arch/pencil-farmhouse.jpg",
      "/assets/portfolio/project03-dining.webp",
    ],
  },
  {
    id: "tumkur-farmstay",
    title: "Tumkur Farmstay",
    location: "Tumkur, Karnataka",
    category: "Farmhouse",
    area: "8,500 sq. ft. on 3 acres",
    year: "2024",
    brief:
      "A boutique farmstay with five independent cottages, a central farmhouse kitchen and sustainable water management.",
    outcome:
      "A commercially operating farmstay with 90% occupancy from its first season.",
    cover: "/assets/portfolio/arch/pencil-farmhouse.jpg",
    images: [
      "/assets/portfolio/arch/pencil-farmhouse.jpg",
      "/assets/portfolio/project03-sunlit.webp",
      "/assets/portfolio/arch/plan-2d.jpg",
    ],
  },
  {
    id: "hospet-agri-villa",
    title: "Hospet Agri Villa",
    location: "Hospet, Karnataka",
    category: "Farmhouse",
    area: "5,100 sq. ft. on 2.5 acres",
    year: "2023",
    brief:
      "A working farmhouse for a sugarcane farmer — designed to serve as both a functional agricultural base and a comfortable family home.",
    outcome:
      "Practical and beautiful: grain storage integrated with the architecture, solar power and modern well-water management.",
    cover: "/assets/portfolio/project03-dining.webp",
    images: [
      "/assets/portfolio/project03-dining.webp",
      "/assets/portfolio/arch/pencil-farmhouse.jpg",
      "/assets/portfolio/arch/isometric-villa.jpg",
    ],
  },

  /* ── Apartment ────────────────────────────────────────────────── */
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
    cover: "/assets/portfolio/project02-living.webp",
    images: [
      "/assets/portfolio/project02-living.webp",
      "/assets/portfolio/project02-dining.webp",
      "/assets/portfolio/project02-kitchen.webp",
      "/assets/portfolio/project02-bedroom.webp",
    ],
  },
  {
    id: "bhk-indiranagar-apartment",
    title: "1 BHK — Indiranagar",
    location: "Indiranagar, Bengaluru",
    category: "Apartment",
    area: "780 sq. ft.",
    year: "2024",
    brief:
      "A compact 1 BHK reimagined for a young professional — every centimetre considered, every piece of furniture dual-purpose.",
    outcome:
      "A generous-feeling apartment that tucks full storage, a dining table for four, and a home office into under 800 sq. ft.",
    cover: "/assets/portfolio/bhk-living.webp",
    images: [
      "/assets/portfolio/bhk-living.webp",
      "/assets/portfolio/bhk-kitchen.webp",
      "/assets/portfolio/bhk-kids.webp",
      "/assets/portfolio/bhk-bathroom.webp",
      "/assets/portfolio/bhk-extra1.webp",
      "/assets/portfolio/bhk-extra2.webp",
    ],
  },
  {
    id: "3d-planned-apartment-hsr",
    title: "HSR Layout 3 BHK",
    location: "HSR Layout, Bengaluru",
    category: "Apartment",
    area: "1,620 sq. ft.",
    year: "2025",
    brief:
      "A family apartment reimagined from a bare shell — 3D planned, material-selected and executed as a complete turnkey.",
    outcome:
      "A warm, functional home delivered in six months from first design session to final handover.",
    cover: "/assets/portfolio/arch/floor-plan-3d.jpg",
    images: [
      "/assets/portfolio/arch/floor-plan-3d.jpg",
      "/assets/portfolio/project02-living.webp",
      "/assets/portfolio/project02-bedroom.webp",
      "/assets/portfolio/project02-kitchen.webp",
    ],
  },

  /* ── Commercial ───────────────────────────────────────────────── */
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
    cover: "/assets/portfolio/project04-reception.webp",
    images: [
      "/assets/portfolio/project04-reception.webp",
      "/assets/portfolio/project04-office.webp",
      "/assets/portfolio/project04-conference.webp",
    ],
  },
  {
    id: "commercial-tech-campus",
    title: "Tech Campus — Outer Ring Road",
    location: "Outer Ring Road, Bengaluru",
    category: "Commercial",
    area: "18,000 sq. ft.",
    year: "2025",
    brief:
      "A multi-floor technology campus — warm stone facade, glass atrium, and a landscape courtyard that draws teams out of their workstations.",
    outcome:
      "A flagship workplace completed on schedule, now serving 400+ professionals across four floors.",
    cover: "/assets/portfolio/arch/commercial-office.jpg",
    images: [
      "/assets/portfolio/arch/commercial-office.jpg",
      "/assets/portfolio/project04-office.webp",
      "/assets/portfolio/project04-conference.webp",
      "/assets/portfolio/arch/plan-2d.jpg",
    ],
  },
  {
    id: "retail-showroom-mg-road",
    title: "Retail Showroom — MG Road",
    location: "MG Road, Bengaluru",
    category: "Commercial",
    area: "3,200 sq. ft.",
    year: "2024",
    brief:
      "A high-street jewellery showroom — dramatic arched display bays, warm brass fixtures and a VIP consultation room.",
    outcome:
      "A showroom that commands attention on MG Road, increasing foot traffic by 40% in the first quarter.",
    cover: "/assets/portfolio/project04-reception.webp",
    images: [
      "/assets/portfolio/project04-reception.webp",
      "/assets/portfolio/project04-conference.webp",
      "/assets/portfolio/arch/commercial-office.jpg",
    ],
  },
];
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

export interface ArchVisualItem {
  id: string;
  src: string;
  title: string;
  category: "Residential" | "Commercial" | "Apartment" | "Farmhouse";
  type: "Isometric" | "Floor Plan" | "Real Architecture";
  badge: string;
  description: string;
}

export const ARCH_VISUALS: ArchVisualItem[] = [
  // Farmhouse
  {
    id: "farmhouse-real-luxury",
    src: "/assets/portfolio/arch/farmhouse-real-luxury.jpg",
    title: "Modern Luxury Farmhouse",
    category: "Farmhouse",
    type: "Real Architecture",
    badge: "Photorealistic Architecture",
    description: "Timber truss pavilion, stone walls & infinity pool in a panoramic estate setting.",
  },
  {
    id: "farmhouse-isometric",
    src: "/assets/portfolio/arch/isometric-farmhouse.jpg",
    title: "Farmhouse Villa Cutaway",
    category: "Farmhouse",
    type: "Isometric",
    badge: "3D Isometric Model",
    description: "Axonometric cutaway showing exposed timber trusses, living pavilion & pool deck.",
  },
  {
    id: "farmhouse-site-plan",
    src: "/assets/portfolio/arch/plan-farmhouse-site.jpg",
    title: "Estate Master Site Plan",
    category: "Farmhouse",
    type: "Floor Plan",
    badge: "Site & Landscape Plan",
    description: "Full estate master plan detailing villa, central courtyard, orchard grove & organic farm.",
  },
  {
    id: "farmhouse-real-courtyard",
    src: "/assets/portfolio/arch/farmhouse-real-courtyard.jpg",
    title: "Courtyard Verandah & Water Body",
    category: "Farmhouse",
    type: "Real Architecture",
    badge: "Photorealistic Architecture",
    description: "Hand-dressed stone columns, reflection pond and terracotta roof lines.",
  },

  // Commercial
  {
    id: "commercial-cad-plan",
    src: "/assets/portfolio/arch/plan-commercial-cad.jpg",
    title: "Corporate Office CAD Blueprint",
    category: "Commercial",
    type: "Floor Plan",
    badge: "Commercial CAD Layout",
    description: "Zoned architectural layout with executive director cabin, open bays & conference.",
  },
  {
    id: "commercial-isometric",
    src: "/assets/portfolio/arch/isometric-office.jpg",
    title: "Creative Workspace Cutaway",
    category: "Commercial",
    type: "Isometric",
    badge: "3D Isometric Model",
    description: "Axonometric model featuring acoustic glass meeting rooms, workstations & living plant wall.",
  },
  {
    id: "commercial-facade",
    src: "/assets/portfolio/arch/commercial-office.jpg",
    title: "Tech Campus Architecture",
    category: "Commercial",
    type: "Real Architecture",
    badge: "Real Architecture",
    description: "Multi-floor corporate campus with stone facade, glass atrium and green courtyards.",
  },

  // Apartment
  {
    id: "apartment-3d-plan",
    src: "/assets/portfolio/arch/floor-plan-3d.jpg",
    title: "Apartment 3D Floor Plan",
    category: "Apartment",
    type: "Floor Plan",
    badge: "3D Spatial Layout",
    description: "Furnished top-down cutaway layout detailing master suite, ensuite baths and open living.",
  },
  {
    id: "apartment-isometric",
    src: "/assets/portfolio/arch/isometric-apartment.jpg",
    title: "Duplex Penthouse Cutaway",
    category: "Apartment",
    type: "Isometric",
    badge: "3D Isometric Model",
    description: "Detailed axonometric cutaway of split-level apartment with kitchen island & terrace balcony.",
  },

  // Residential
  {
    id: "residential-2d-plan",
    src: "/assets/portfolio/arch/plan-2d.jpg",
    title: "Residential Working Blueprint",
    category: "Residential",
    type: "Floor Plan",
    badge: "2D Construction Blueprint",
    description: "Dimensioned structural plan, wall assemblies and circulation for modern family residence.",
  },
  {
    id: "residential-isometric",
    src: "/assets/portfolio/arch/isometric-villa.jpg",
    title: "Contemporary Villa Cutaway",
    category: "Residential",
    type: "Isometric",
    badge: "3D Isometric Model",
    description: "Volumetric 3D cutaway showing double-height living, central staircase and garden connect.",
  },
];

type CategoryFilter = "All" | "Residential" | "Commercial" | "Apartment" | "Farmhouse";
type TypeFilter = "All Types" | "Isometric" | "Floor Plan" | "Real Architecture";

interface ArchVisualsShowcaseProps {
  openLightbox: (e: React.MouseEvent, images: string[], index: number) => void;
}

export function ArchVisualsShowcase({ openLightbox }: ArchVisualsShowcaseProps) {
  const [categoryFilter, setCategoryFilter] = React.useState<CategoryFilter>("All");
  const [typeFilter, setTypeFilter] = React.useState<TypeFilter>("All Types");

  const categories: CategoryFilter[] = ["All", "Residential", "Commercial", "Apartment", "Farmhouse"];
  const types: TypeFilter[] = ["All Types", "Isometric", "Floor Plan", "Real Architecture"];

  const filteredItems = React.useMemo(() => {
    return ARCH_VISUALS.filter((item) => {
      const matchCat = categoryFilter === "All" || item.category === categoryFilter;
      const matchType = typeFilter === "All Types" || item.type === typeFilter;
      return matchCat && matchType;
    });
  }, [categoryFilter, typeFilter]);

  // List of all image URLs in current filtered view for lightbox navigation
  const filteredImages = React.useMemo(() => filteredItems.map((item) => item.src), [filteredItems]);

  return (
    <div className="mt-10">
      {/* Category filter pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-charcoal/10 pb-5">
        <span className="mr-2 hidden font-sans text-xs uppercase tracking-widest text-muted sm:inline-block">
          Category:
        </span>
        {categories.map((cat) => {
          const count = cat === "All" ? ARCH_VISUALS.length : ARCH_VISUALS.filter((x) => x.category === cat).length;
          const active = categoryFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 font-sans text-xs transition-all duration-200 ${
                active
                  ? "bg-charcoal text-ivory shadow-sm"
                  : "bg-ivory/80 text-muted hover:bg-ivory hover:text-charcoal"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[0.65rem] tabular-nums ${
                  active ? "text-oak-light" : "text-muted/60"
                }`}
              >
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Type sub-filter pills */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="mr-2 font-sans text-xs uppercase tracking-widest text-muted">
          Format:
        </span>
        {types.map((t) => {
          const active = typeFilter === t;
          return (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`rounded-full px-3.5 py-1.5 font-sans text-xs transition-colors ${
                active
                  ? "border border-oak-dark bg-oak/10 text-charcoal font-medium"
                  : "border border-transparent bg-ivory/60 text-muted hover:bg-ivory hover:text-charcoal"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Grid of items */}
      <motion.div layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-ivory shadow-[0_2px_12px_rgba(0,0,0,0.04)] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <button
                onClick={(e) => openLightbox(e, filteredImages, idx)}
                className="relative block w-full overflow-hidden bg-sand/40 text-left"
                aria-label={`Open larger view of ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay hover badge */}
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-ivory/95 px-4 py-2 font-sans text-xs font-medium text-charcoal shadow-lg">
                    <Eye className="h-3.5 w-3.5 text-oak-dark" />
                    View In Lightbox
                  </span>
                </div>

                {/* Category & format tag */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-charcoal/80 px-2.5 py-1 font-sans text-[0.65rem] font-medium uppercase tracking-wider text-ivory backdrop-blur-sm">
                    {item.category}
                  </span>
                  <span className="rounded-full bg-oak/90 px-2.5 py-1 font-sans text-[0.65rem] font-medium tracking-wide text-ivory backdrop-blur-sm">
                    {item.type}
                  </span>
                </div>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-wider text-oak-dark">
                  <span>{item.badge}</span>
                </div>
                <h3 className="mt-1.5 font-serif text-lg font-medium text-charcoal group-hover:text-oak-dark transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

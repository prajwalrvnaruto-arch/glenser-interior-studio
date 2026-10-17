import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArchVisualsShowcase } from "@/components/projects/ArchVisualsShowcase";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Residential", "Farmhouse", "Commercial", "Apartment"] as const;
type Filter = (typeof FILTERS)[number];

// Gallery images for the completed-projects masonry section.
const COMPLETED_IMAGES = [
  "/assets/portfolio/project01-lux-living.webp",
  "/assets/portfolio/project01-living.webp",
  "/assets/portfolio/project01-kitchen.webp",
  "/assets/portfolio/project01-bedroom.webp",
  "/assets/portfolio/project01-console.webp",
  "/assets/portfolio/project02-living.webp",
  "/assets/portfolio/project02-dining.webp",
  "/assets/portfolio/project02-kitchen.webp",
  "/assets/portfolio/project02-bedroom.webp",
  "/assets/portfolio/project03-villa.webp",
  "/assets/portfolio/project03-sunlit.webp",
  "/assets/portfolio/project03-dining.webp",
  "/assets/portfolio/project04-reception.webp",
  "/assets/portfolio/project04-office.webp",
  "/assets/portfolio/project04-conference.webp",
  "/assets/services/architecture.webp",
  "/assets/services/residential.webp",
  "/assets/services/commercial.webp",
  "/assets/services/kitchen.webp",
  "/assets/services/bedroom.webp",
  "/assets/services/renovation.webp",
  "/assets/about/exterior.webp",
  "/assets/about/studio.webp",
  "/assets/process/consultation.webp",
  "/assets/process/design.webp",
  "/assets/process/execution.webp",
  "/assets/process/handover.webp",
];

/* ─────────────────────────────────────────────────────────────────── */
/*  Shared Lightbox component                                           */
/* ─────────────────────────────────────────────────────────────────── */
interface LightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  // Keyboard support
  React.useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            id="lightbox-close"
            onClick={onClose}
            aria-label="Close lightbox"
            className="lightbox-btn absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image */}
          <motion.img
            key={index}
            src={images[index]}
            alt={`Project photo ${index + 1} of ${images.length}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            draggable={false}
          />

          {/* Navigation + counter */}
          {images.length > 1 && (
            <div
              className="absolute bottom-6 flex items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onPrev}
                className="lightbox-btn flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-sans text-sm text-ivory/80 tabular-nums">
                {index + 1} / {images.length}
              </span>
              <button
                onClick={onNext}
                className="lightbox-btn flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/*  Projects page                                                       */
/* ─────────────────────────────────────────────────────────────────── */
export function Projects() {
  const [filter, setFilter] = React.useState<Filter>("All");

  // Lightbox state for the project-card gallery
  const [cardLightbox, setCardLightbox] = React.useState<{
    images: string[];
    index: number;
  } | null>(null);

  // Lightbox state for the masonry completed-images gallery
  const [galleryLightbox, setGalleryLightbox] = React.useState<number | null>(null);

  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  /* Card lightbox helpers */
  const openCardLightbox = React.useCallback(
    (e: React.MouseEvent, images: string[], index: number) => {
      e.preventDefault();
      setCardLightbox({ images, index });
    },
    []
  );
  const closeCardLightbox = React.useCallback(() => setCardLightbox(null), []);
  const prevCard = React.useCallback(
    () =>
      setCardLightbox((s) =>
        s ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length } : s
      ),
    []
  );
  const nextCard = React.useCallback(
    () =>
      setCardLightbox((s) =>
        s ? { ...s, index: (s.index + 1) % s.images.length } : s
      ),
    []
  );

  /* Gallery lightbox helpers */
  const closeGallery = React.useCallback(() => setGalleryLightbox(null), []);
  const prevGallery = React.useCallback(
    () =>
      setGalleryLightbox((i) =>
        i === null ? null : (i - 1 + COMPLETED_IMAGES.length) % COMPLETED_IMAGES.length
      ),
    []
  );
  const nextGallery = React.useCallback(
    () =>
      setGalleryLightbox((i) =>
        i === null ? null : (i + 1) % COMPLETED_IMAGES.length
      ),
    []
  );

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Work we're proud to put
            <br />
            <em className="text-oak not-italic">our name on.</em>
          </>
        }
        description="A selection of homes, farmhouses and workplaces across Karnataka — each one a different family, a different site, a different story. Filter by type and take a look inside."
        image="/assets/portfolio/project01-lux-living.webp"
      />

      {/* Filterable grid */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8" aria-label="Project portfolio">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
          {FILTERS.map((f) => (
            <button
              key={f}
              id={`filter-${f.toLowerCase()}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-5 py-2.5 font-sans text-sm font-medium transition-all duration-300",
                filter === f
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-charcoal/15 text-muted hover:border-charcoal/40 hover:text-charcoal"
              )}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto hidden font-sans text-xs uppercase tracking-[0.15em] text-muted sm:block">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </span>
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.04 }}
              >
                {/* Card — click opens the project detail page; the zoom button opens the lightbox */}
                <div className="group relative block overflow-hidden rounded-3xl bg-cream">
                  <Link
                    to={`/projects/${project.id}`}
                    aria-label={`View ${project.title} project details`}
                  >
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
                  </Link>

                  {/* Category pill */}
                  <span className="absolute left-4 top-4 rounded-full border border-ivory/25 bg-charcoal/30 px-3 py-1 font-sans text-[0.65rem] uppercase tracking-[0.15em] text-ivory backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Quick-zoom button — opens lightbox */}
                  <button
                    onClick={(e) => openCardLightbox(e, project.images, 0)}
                    aria-label={`Quick view images for ${project.title}`}
                    className="lightbox-btn absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/15 text-ivory opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-ivory/30"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>

                  {/* Card footer */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <Link to={`/projects/${project.id}`} tabIndex={-1} aria-hidden="true">
                      <h2 className="font-serif text-xl font-medium text-ivory sm:text-2xl">
                        {project.title}
                      </h2>
                    </Link>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="flex items-center gap-1.5 font-sans text-xs text-ivory/80">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {project.location} · {project.area}
                      </p>
                      <Link
                        to={`/projects/${project.id}`}
                        aria-label={`Open ${project.title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/15 text-ivory backdrop-blur-sm transition-all duration-300 group-hover:bg-oak group-hover:text-charcoal"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Architectural visuals showcase */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimatedSection>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-oak-dark">
                  Architectural Deliverables
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl">
                  Isometrics, blueprints & realisations
                </h2>
                <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted">
                  Explore our technical design workflow across residential, commercial, apartment, and farmhouse projects — from CAD floor plans and 3D isometric cutaways to photo-realistic structures.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Interactive filter pills for architectural showcase */}
          <ArchVisualsShowcase openLightbox={openCardLightbox} />
        </div>
      </section>

      {/* Completed projects masonry gallery */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimatedSection>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-oak-dark">
                  The Archive
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl">
                  Recent deliveries across Karnataka
                </h2>
              </div>
              <p className="font-sans text-sm text-muted">
                {COMPLETED_IMAGES.length} photos · tap to view
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [column-fill:_balance]">
            {COMPLETED_IMAGES.map((src, i) => (
              <AnimatedSection key={src} delay={Math.min(i * 0.02, 0.3)}>
                <button
                  onClick={() => setGalleryLightbox(i)}
                  className="group mb-4 block w-full overflow-hidden rounded-2xl"
                  aria-label={`View completed project photo ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`Lines & Designs completed project — Karnataka ${i + 1}`}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Card / quick-view lightbox */}
      <Lightbox
        images={cardLightbox?.images ?? []}
        index={cardLightbox?.index ?? null}
        onClose={closeCardLightbox}
        onPrev={prevCard}
        onNext={nextCard}
      />

      {/* Gallery / archive lightbox */}
      <Lightbox
        images={COMPLETED_IMAGES}
        index={galleryLightbox}
        onClose={closeGallery}
        onPrev={prevGallery}
        onNext={nextGallery}
      />
    </>
  );
}
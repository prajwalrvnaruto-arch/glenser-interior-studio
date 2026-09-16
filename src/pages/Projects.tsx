import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, X } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Residential", "Commercial", "Apartment"] as const;
type Filter = (typeof FILTERS)[number];

const COMPLETED_IMAGES = Array.from(
  { length: 80 },
  (_, i) => `/assets/completed/completed-${String(i + 1).padStart(2, "0")}.jpg`
);

const WALKTHROUGH_VIDEOS = [
  { src: "/assets/videos/walkthrough-1.mp4", poster: "/assets/completed/completed-01.jpg" },
  { src: "/assets/videos/walkthrough-2.mp4", poster: "/assets/completed/completed-02.jpg" },
  { src: "/assets/videos/walkthrough-3.mp4", poster: "/assets/completed/completed-03.jpg" },
  { src: "/assets/videos/walkthrough-4.mp4", poster: "/assets/completed/completed-04.jpg" },
];

export function Projects() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [lightbox, setLightbox] = React.useState<number | null>(null);

  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

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
        description="A selection of homes and workplaces across Bengaluru — each one a different family, a different street, a different story. Filter by type and take a look inside."
        image="/assets/portfolio/project01-lux-living.png"
      />

      {/* Filterable grid */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
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
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group relative block overflow-hidden rounded-3xl bg-cream"
                >
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                  <span className="absolute left-4 top-4 rounded-full border border-ivory/25 bg-charcoal/30 px-3 py-1 font-sans text-[0.65rem] uppercase tracking-[0.15em] text-ivory backdrop-blur-md">
                    {project.category}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h2 className="font-serif text-xl font-medium text-ivory sm:text-2xl">
                      {project.title}
                    </h2>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="flex items-center gap-1.5 font-sans text-xs text-ivory/80">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location} · {project.area}
                      </p>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/15 text-ivory backdrop-blur-sm transition-all duration-300 group-hover:bg-oak group-hover:text-charcoal">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Completed project walkthroughs */}
      <section className="bg-charcoal py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimatedSection>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-oak">
                  Walkthroughs
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium text-ivory sm:text-4xl">
                  Step inside the finished spaces
                </h2>
              </div>
              <p className="font-sans text-sm text-ivory/60">
                {WALKTHROUGH_VIDEOS.length} completed project videos
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {WALKTHROUGH_VIDEOS.map((video, i) => (
              <AnimatedSection key={video.src} delay={Math.min(i * 0.06, 0.3)}>
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  preload="metadata"
                  playsInline
                  className="aspect-video w-full rounded-2xl bg-charcoal/40 object-cover shadow-lg ring-1 ring-ivory/10"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Completed projects gallery */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimatedSection>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-oak-dark">
                  The Archive
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl">
                  Recent deliveries across Bengaluru
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
                  onClick={() => setLightbox(i)}
                  className="group mb-4 block w-full overflow-hidden rounded-2xl"
                  aria-label={`View completed project photo ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`Prakash Interior Decors completed project — Bengaluru ${i + 1}`}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={lightbox}
              src={COMPLETED_IMAGES[lightbox]}
              alt={`Completed project photo ${lightbox + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="absolute bottom-6 flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((i) => (i === 0 ? COMPLETED_IMAGES.length - 1 : i! - 1));
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
                aria-label="Previous image"
              >
                ←
              </button>
              <span className="font-sans text-sm text-ivory/80">
                {lightbox + 1} / {COMPLETED_IMAGES.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((i) => (i! + 1) % COMPLETED_IMAGES.length);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
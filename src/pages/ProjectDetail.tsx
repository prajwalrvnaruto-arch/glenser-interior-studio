import * as React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, ArrowLeft, ArrowRight, Clock3, Ruler, CalendarDays, Maximize2, ZoomIn } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { cn, BUSINESS_NAME } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/QuoteModal";
import { Lightbox } from "@/components/shared/Lightbox";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);
  const [active, setActive] = React.useState(0);
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    setActive(0);
    setLightboxIndex(null);
  }, [id]);

  // Per-project page title + meta description (overrides the /projects route meta).
  React.useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — ${BUSINESS_NAME}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", project.brief);
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  const next = () => setActive((i) => (i + 1) % project.images.length);
  const prev = () => setActive((i) => (i - 1 + project.images.length) % project.images.length);

  const openLightbox = (index: number) => {
    setActive(index);
    setLightboxIndex(index);
  };
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = () => {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % project.images.length));
  };
  const prevLightbox = () => {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + project.images.length) % project.images.length));
  };

  return (
    <>
      {/* Detail hero */}
      <section className="relative flex min-h-[64svh] w-full items-end overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={active}
            src={project.images[active]}
            alt={`${project.title} — image ${active + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover cursor-pointer"
            onClick={() => openLightbox(active)}
          />
        </AnimatePresence>
        <div 
          className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/10 cursor-pointer pointer-events-none" 
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-40 sm:px-8">
          <Link
            to="/projects"
            className="mb-6 inline-flex items-center gap-2 font-sans text-sm text-ivory/80 transition-colors hover:text-ivory"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl font-serif text-4xl font-medium leading-tight text-ivory sm:text-5xl md:text-6xl"
          >
            {project.title}
          </motion.h1>

          {/* Image nav */}
          <div className="mt-8 flex flex-wrap items-center gap-3 pb-12">
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-ivory/70">
              {active + 1} / {project.images.length}
            </span>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory/15"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory/15"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => openLightbox(active)}
              aria-label="Open pop-up gallery"
              className="flex h-11 items-center gap-2 rounded-full border border-ivory/25 px-4 text-xs font-medium text-ivory transition-colors hover:bg-ivory/15"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              <span>View Gallery</span>
            </button>
          </div>
        </div>
      </section>

      {/* Meta + brief */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-oak-dark">
                The Brief
              </p>
              <p className="mt-4 font-serif text-2xl font-medium leading-relaxed text-charcoal sm:text-[1.7rem]">
                {project.brief}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-10"
            >
              <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-oak-dark">
                The Outcome
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-muted">
                {project.outcome}
              </p>
            </motion.div>

            {/* Thumbnails */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-oak-dark">
                  Project Gallery ({project.images.length} photos)
                </p>
                <button
                  onClick={() => openLightbox(active)}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-oak-dark transition-colors hover:text-charcoal"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  View fullscreen gallery
                </button>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {project.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => openLightbox(i)}
                    aria-label={`Open pop-up gallery for image ${i + 1}`}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-oak",
                      active === i
                        ? "border-oak shadow-sm"
                        : "border-transparent opacity-80 hover:border-oak/40 hover:opacity-100"
                    )}
                  >
                    <img
                      src={src}
                      alt={`${project.title} photo ${i + 1}`}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100">
                      <ZoomIn className="h-5 w-5 text-ivory drop-shadow-md" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Facts card */}
          <div className="lg:col-span-1">
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl border border-charcoal/8 bg-cream p-8 lg:sticky lg:top-24"
            >
              <h2 className="font-serif text-xl font-medium text-charcoal">Project Details</h2>
              <dl className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-oak-dark" />
                  <div>
                    <dt className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-muted">Location</dt>
                    <dd className="mt-0.5 font-sans text-sm font-medium text-charcoal">{project.location}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Ruler className="mt-0.5 h-5 w-5 text-oak-dark" />
                  <div>
                    <dt className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-muted">Area</dt>
                    <dd className="mt-0.5 font-sans text-sm font-medium text-charcoal">{project.area}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CalendarDays className="mt-0.5 h-5 w-5 text-oak-dark" />
                  <div>
                    <dt className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-muted">Year</dt>
                    <dd className="mt-0.5 font-sans text-sm font-medium text-charcoal">{project.year}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock3 className="mt-0.5 h-5 w-5 text-oak-dark" />
                  <div>
                    <dt className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-muted">Category</dt>
                    <dd className="mt-0.5 font-sans text-sm font-medium text-charcoal">{project.category}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 border-t border-charcoal/8 pt-7">
                <p className="font-sans text-sm text-muted">
                  Have a space like this in mind?
                </p>
                <QuoteModal
                  trigger={
                    <Button variant="accent" size="lg" className="mt-4 w-full">
                      Get a Quote
                    </Button>
                  }
                />
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Next project strip */}
      <section className="border-t border-charcoal/8 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
          <p className="font-serif text-2xl font-medium text-charcoal sm:text-3xl">
            Keen to see more?
          </p>
          <Link to="/projects" className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-charcoal">
            Browse all projects
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 transition-all duration-300 group-hover:border-oak group-hover:bg-oak">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* Pop-up Gallery Lightbox */}
      <Lightbox
        images={project.images}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
        title={project.title}
      />
    </>
  );
}
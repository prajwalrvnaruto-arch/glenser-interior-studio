import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title?: string;
}

export function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  title,
}: LightboxProps) {
  // Lock body scroll when open
  React.useEffect(() => {
    if (index === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [index]);

  // Keyboard navigation
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title ? `${title} gallery lightbox` : "Image lightbox"}
        >
          {/* Top Bar with Title and Close */}
          <div
            className="absolute left-0 right-0 top-0 flex items-center justify-between p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {title ? (
              <span className="font-serif text-lg font-medium text-ivory/90 sm:text-xl">
                {title}
              </span>
            ) : (
              <div />
            )}
            <button
              id="lightbox-close"
              onClick={onClose}
              aria-label="Close lightbox"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20 focus:outline-none focus:ring-2 focus:ring-oak"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Image */}
          <motion.img
            key={index}
            src={images[index]}
            alt={title ? `${title} — image ${index + 1}` : `Project image ${index + 1} of ${images.length}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            draggable={false}
          />

          {/* Navigation Controls & Counter */}
          {images.length > 1 && (
            <div
              className="absolute bottom-6 flex items-center gap-4 rounded-full bg-charcoal/60 px-5 py-2.5 backdrop-blur-sm ring-1 ring-ivory/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onPrev}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/25 focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-sans text-xs uppercase tracking-widest text-ivory/80 tabular-nums">
                {index + 1} / {images.length}
              </span>
              <button
                onClick={onNext}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/25 focus:outline-none"
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

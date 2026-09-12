import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  /** Tall feature card vs compact tile. */
  tall?: boolean;
  className?: string;
}

export function ProjectCard({ project, tall = false, className }: ProjectCardProps) {
  return (
    <motion.div
      whileHover="hover"
      className={cn("group relative", className)}
    >
      <Link
        to={`/projects/${project.id}`}
        className={cn(
          "relative block overflow-hidden rounded-3xl bg-cream",
          tall ? "aspect-[3/4]" : "aspect-[4/5]"
        )}
      >
        <motion.img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          variants={{ hover: { scale: 1.04 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Category chip */}
        <span className="absolute left-4 top-4 rounded-full border border-ivory/25 bg-charcoal/30 px-3 py-1 font-sans text-[0.65rem] uppercase tracking-[0.15em] text-ivory backdrop-blur-md">
          {project.category}
        </span>

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3 className="font-serif text-xl font-medium text-ivory sm:text-2xl">
            {project.title}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="flex items-center gap-1.5 font-sans text-xs text-ivory/75">
              <MapPin className="h-3.5 w-3.5" />
              {project.location}
            </p>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/15 text-ivory backdrop-blur-sm transition-all duration-300 group-hover:bg-oak group-hover:text-charcoal">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
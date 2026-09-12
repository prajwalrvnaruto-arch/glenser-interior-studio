import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProjectCard } from "@/components/shared/ProjectCard";

const FEATURED_IDS = [
  "contemporary-bengaluru-residence",
  "japandi-apartment",
  "contemporary-villa",
  "boutique-office",
];

export function FeaturedProjects() {
  const featured = FEATURED_IDS.map(
    (id) => PROJECTS.find((p) => p.id === id)!
  );

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that speak for themselves"
          description="A glimpse of the homes and workspaces we've designed across Bengaluru — each one a conversation between light, material and the people who live in it."
        />
        <AnimatedSection className="sm:pb-1">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-charcoal"
          >
            View all projects
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 transition-all duration-300 group-hover:border-oak group-hover:bg-oak">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </AnimatedSection>
      </div>

      {/* Asymmetric bento grid */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 md:grid-rows-2">
        <AnimatedSection className="md:col-span-7 md:row-span-2">
          <ProjectCard project={featured[0]} tall className="h-full" />
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="md:col-span-5">
          <ProjectCard project={featured[1]} className="h-full" />
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="md:col-span-5">
          <div className="grid h-full grid-cols-2 gap-5">
            <ProjectCard project={featured[2]} className="h-full" />
            <ProjectCard project={featured[3]} className="h-full" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
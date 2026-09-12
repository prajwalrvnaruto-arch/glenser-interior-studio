import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessTeaser } from "@/components/home/ProcessTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesOverview />
      <ProcessTeaser />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
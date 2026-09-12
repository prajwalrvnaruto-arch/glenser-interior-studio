import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <motion.div
      whileHover="hover"
      className={cn("group relative overflow-hidden", className)}
    >
      <Link
        to="/services"
        className="relative flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-3xl bg-cream p-6 sm:min-h-[24rem]"
      >
        <motion.img
          src={service.image}
          alt={service.title}
          loading="lazy"
          variants={{ hover: { scale: 1.05 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-transparent" />

        <div className="relative">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/15 text-ivory backdrop-blur-md">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-serif text-2xl font-medium text-ivory">
            {service.title}
          </h3>
          <p className="mt-2 font-sans text-sm text-ivory/80">{service.short}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.15em] text-oak opacity-90">
            Explore
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
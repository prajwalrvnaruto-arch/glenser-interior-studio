import type { LucideIcon } from "lucide-react";
import {
  Home,
  Building2,
  ChefHat,
  BedDouble,
  Ruler,
  Hammer,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "residential",
    title: "Residential Interiors",
    short: "Complete homes crafted around how you live.",
    description:
      "From apartment makeovers to sprawling villas, we design warm, liveable interiors that reflect your rhythm of life. Every room is planned around natural light, proportion, and the way your family actually uses the space each day.",
    icon: Home,
    image: "/assets/services/residential.png",
    features: [
      "Turnkey 1, 2 & 3 BHK interiors",
      "Custom furniture & joinery",
      "Soft furnishing & styling",
      "Smart home integration",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Interiors",
    short: "Workspaces that welcome clients and inspire teams.",
    description:
      "Offices, retail, cafés and wellness studios — spaces that carry your brand into three dimensions. We balance aesthetics with durability and acoustics, delivering environments where people focus, connect, and stay.",
    icon: Building2,
    image: "/assets/services/commercial.png",
    features: [
      "Office fit-outs & reception design",
      "Retail & hospitality interiors",
      "Brand-aligned material palettes",
      "ERG-compliant workstations",
    ],
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    short: "Beautifully engineered kitchens built to cook in.",
    description:
      "The heart of your home deserves precision. Our modular kitchens pair high-performance carpentry with intelligent storage, hard-wearing surfaces, and layouts that make cooking, entertaining and tidying effortless.",
    icon: ChefHat,
    image: "/assets/services/kitchen.png",
    features: [
      "Complete turnkey kitchen design",
      "Premium hardware & soft-close",
      "Water-resistant & fire-safe materials",
      "Smart storage planning",
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom Interiors",
    short: "Calm, restful retreats for the end of a Bangalore day.",
    description:
      "A bedroom should feel like a deep breath. We layer textiles, lighting and joinery into restful retreats — with wardrobe design, headboard detailing and ambient lighting tuned for true relaxation.",
    icon: BedDouble,
    image: "/assets/services/bedroom.png",
    features: [
      "Bespoke wardrobes & vanities",
      "Bedroom & lighting design",
      "Window treatments",
      "Children's room design",
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Space Planning",
    short: "Smarter layouts before a single wall goes up.",
    description:
      "Great interiors begin with great bones. Our architects rethink circulation, daylight and storage at the planning stage — so the finished space feels larger, lighter and far more generous than its square footage.",
    icon: Ruler,
    image: "/assets/services/architecture.png",
    features: [
      "Space planning & layouts",
      "Structural & permit drawings",
      "Façade & elevation design",
      "Vastu-conscious planning",
    ],
  },
  {
    id: "renovation",
    title: "Renovation & Execution",
    short: "Precise execution teams that deliver on time.",
    description:
      "Ideas only matter when they're built well. Our in-house execution crew manages civil work, false ceilings, electrical, plumbing and finishing from a single point of contact — with on-site quality checks at every milestone.",
    icon: Hammer,
    image: "/assets/services/renovation.png",
    features: [
      "Single-point project management",
      "Civil, electrical & plumbing",
      "False ceiling & flooring",
      "On-site QC & daily updates",
    ],
  },
];
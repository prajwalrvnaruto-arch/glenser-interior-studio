import type { LucideIcon } from "lucide-react";
import {
  Compass,
  PenTool,
  Calculator,
  HardHat,
  Sofa,
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
    id: "architecture",
    title: "Architecture",
    short: "Smarter layouts before a single wall goes up.",
    description:
      "Every project starts with a thorough read of the site. Our architects inspect, mark and plan before a line is drawn — so the finished structure feels larger, lighter and far more generous than its square footage.",
    icon: Compass,
    image: "/assets/services/architecture.webp",
    features: [
      "Inspection of site",
      "Marking",
      "Designing",
      "Supervision",
    ],
  },
  {
    id: "design",
    title: "Design",
    short: "Concepts you can see before a brick is laid.",
    description:
      "From floor plans to photorealistic 3D views, our design team translates your brief into a complete visual story — refined with you until every room feels right on paper.",
    icon: PenTool,
    image: "/assets/services/kitchen.webp",
    features: [
      "2D floor plans & layouts",
      "3D visualisation & walkthroughs",
      "Material & finish selection",
      "Design revisions with you",
    ],
  },
  {
    id: "estimation",
    title: "Estimation",
    short: "Transparent costing before you commit.",
    description:
      "Know what you're spending and why. Our estimation team breaks every project into an itemised, material-wise cost sheet, so there are no surprises between the first drawing and the last coat of paint.",
    icon: Calculator,
    image: "/assets/services/commercial.webp",
    features: [
      "Detailed quantity & cost estimates",
      "Material & brand specification",
      "Itemised bill of quantities",
      "Budget planning & phasing",
    ],
  },
  {
    id: "civil-construction",
    title: "Civil Construction",
    short: "Built right, from foundation to finish.",
    description:
      "A single, accountable team for every kind of build — commercial, residential, farm houses, renovations and infrastructure — managed on-site from groundwork to handover.",
    icon: HardHat,
    image: "/assets/services/renovation.webp",
    features: [
      "Commercial buildings",
      "Residential buildings",
      "Farm houses",
      "Renovation of houses",
      "Layout marking & infrastructure development",
    ],
  },
  {
    id: "interior-execution",
    title: "Interior Designing & Execution",
    short: "Designed, built and styled under one roof.",
    description:
      "From the first moodboard to the final styling, we design and execute interiors and exteriors that reflect how you actually live and work — with our own in-house execution team seeing it through.",
    icon: Sofa,
    image: "/assets/services/residential.webp",
    features: [
      "2D & 3D interior design",
      "Home interiors",
      "Shop interiors",
      "Corporate house interiors",
      "Landscaping",
      "Wallpapers",
      "Paving of stones",
      "Exterior cladding",
    ],
  },
];

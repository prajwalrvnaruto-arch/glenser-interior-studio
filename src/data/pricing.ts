export interface DesignPackage {
  id: string;
  name: string;
  tagline: string;
  rate: string;
  variant: "primary" | "accent" | "oxide";
}

export const DESIGN_PACKAGE_ROWS = [
  "Scheme Drawing : All Floors (2D)",
  "Elevation Design (3D)",
  "Initial Site Assessment *",
  "Structural Drawings",
  "Soil Test Report *",
  "Elevation Detail Drawing (2D)",
  "Working Drawing : All Floors (2D)",
  "Electrical Drawing : All Floors (2D)",
  "Plumbing Drawing : All Floors (2D)",
  "Interior Views : All Rooms (3D)",
  "Interior Detailing : All Rooms (2D)",
  "Construction Estimate",
] as const;

export const DESIGN_PACKAGES: (DesignPackage & { included: boolean[] })[] = [
  {
    id: "concept",
    name: "Package 1",
    tagline: "Concept Design — Visualize Your Home",
    rate: "₹45",
    variant: "primary",
    included: [true, true, true, false, false, false, false, false, false, false, false, true],
  },
  {
    id: "construction-design",
    name: "Package 2",
    tagline: "Construction Design — Prepare Your Home for Construction",
    rate: "₹85",
    variant: "accent",
    included: [true, true, true, true, true, true, true, true, true, false, false, true],
  },
  {
    id: "complete-home",
    name: "Package 3",
    tagline: "Complete Home Design — Complete Architecture + Interiors",
    rate: "₹115",
    variant: "oxide",
    included: [true, true, true, true, true, true, true, true, true, true, true, true],
  },
];

export interface ConstructionCategory {
  label: string;
  detail: string;
}

export const CONSTRUCTION_CATEGORIES: ConstructionCategory[] = [
  { label: "Design", detail: "Architectural + structural drawings prepared before construction begins." },
  { label: "Project Management", detail: "A single point of contact overseeing schedule, vendors and quality." },
  { label: "Structure", detail: "RCC framework, footing, columns and slabs built to code." },
  { label: "Bathroom & Plumbing", detail: "Fittings, piping and waterproofing across all bathrooms." },
  { label: "Flooring", detail: "Tile, vitrified or stone flooring across all rooms." },
  { label: "Kitchen & Dining", detail: "Platform, plumbing points and provisions for modular fit-out." },
  { label: "Door, Windows and Railing", detail: "Frames, shutters, UPVC/aluminium windows and MS railings." },
  { label: "Painting", detail: "Interior and exterior putty, primer and paint finish." },
  { label: "Electrical", detail: "Wiring, switches, DB and fittings across the home." },
  { label: "What's Not Included", detail: "Items outside the package scope — shared on request." },
];

export interface ConstructionPackage {
  id: string;
  name: string;
  rate: string;
  variant: "primary" | "accent" | "oxide";
}

export const CONSTRUCTION_PACKAGES: ConstructionPackage[] = [
  { id: "standard", name: "Standard Package", rate: "₹2,499", variant: "primary" },
  { id: "premium", name: "Premium Package", rate: "₹2,749", variant: "accent" },
  { id: "ultra-luxury", name: "Ultra Luxury", rate: "₹3,499", variant: "oxide" },
];

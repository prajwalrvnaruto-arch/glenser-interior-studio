import type { LucideIcon } from "lucide-react";
import { MessageSquareText, DraftingCompass, HardHat, KeyRound } from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  short: string;
  description: string;
  timeline: string;
  icon: LucideIcon;
  image: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    short: "We listen before we design.",
    description:
      "We begin by understanding your vision, lifestyle and budget. On site or at the studio, we walk through your space, discuss how you want to live in it, and map every requirement — before a single line is drawn.",
    timeline: "Week 1",
    icon: MessageSquareText,
    image: "/assets/process/consultation.png",
  },
  {
    number: "02",
    title: "Design Development",
    short: "Concepts become buildable plans.",
    description:
      "Our designers translate the brief into spatial layouts, 3D visuals and a curated material palette — oak, travertine, textiles, lighting. You review and refine each layer until the design feels unmistakably yours.",
    timeline: "Weeks 2 – 4",
    icon: DraftingCompass,
    image: "/assets/process/design.png",
  },
  {
    number: "03",
    title: "Execution",
    short: "Built precisely, managed daily.",
    description:
      "Once the design is frozen, our in-house crew takes over. Civil work, false ceilings, joinery, electrical and finishing are executed with on-site QC and regular photo updates — one point of contact throughout.",
    timeline: "Weeks 4 – 10",
    icon: HardHat,
    image: "/assets/process/execution.png",
  },
  {
    number: "04",
    title: "Handover",
    short: "The space, the keys, the little details.",
    description:
      "We walk the finished home with you room by room, run through warranties and maintenance, and hand over the keys — along with a space that's clean, styled and ready to live in from day one.",
    timeline: "Final week",
    icon: KeyRound,
    image: "/assets/process/handover.png",
  },
];
export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  project: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Prakash took a 2 BHK we'd lived in for six years and made it feel like a brand-new home. They managed everything — civil, electrics, kitchen — so we never once had to chase vendors.",
    name: "Ananya & Rohan Iyer",
    context: "Homeowners",
    project: "Contemporary Bengaluru Residence",
  },
  {
    quote:
      "The team listened far more than they talked. Our kitchen was designed around the way we actually cook, and two years on, every drawer still makes sense.",
    name: "Priya Seshadri",
    context: "Home Chef",
    project: "Modular Kitchen, Indiranagar",
  },
  {
    quote:
      "They delivered our office fit-out within the timeline they promised — which almost never happens in Bengaluru. The reception alone has changed how clients walk in.",
    name: "Karthik Nair",
    context: "Founder, Design Studio",
    project: "Boutique Office",
  },
  {
    quote:
      "From the moodboard to the final handover, the process was calm and precise. Our villa now feels like the house we imagined — but better, because it works.",
    name: "Meera & Arjun Rao",
    context: "Villa Owners",
    project: "Contemporary Villa, Sarjapur",
  },
];
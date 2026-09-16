import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a phone number for wa.me deep links. */
export function waPhone(raw: string) {
  return raw.replace(/[^+\d]/g, "");
}

/** Build a WhatsApp deep-link with a pre-filled message. */
export function waLink(message: string) {
  return `https://wa.me/${waPhone(BUSINESS_PHONE)}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------------ */
/*  Studio business constants                                          */
/* ------------------------------------------------------------------ */

export const BUSINESS_NAME = "Prakash Interior Decors";
export const BUSINESS_PHONE = "+91 95913 44715";
export const BUSINESS_EMAIL = "deepakmalviya185@gmail.com";
export const BUSINESS_ADDRESS_LINE1 = "609, 3rd C Cross Road, HRBR Layout 2nd Block";
export const BUSINESS_ADDRESS_LINE2 = "Kalyan Nagar, Bengaluru, Karnataka 560043";
export const BUSINESS_HOURS = "Mon – Sat · 10:00 AM – 7:00 PM";
export const WHATSAPP_GREETING =
  "Hello Prakash Interior Decors, I'm interested in your interior design services.";
export const FORM_ENDPOINT = "https://api.web3forms.com/submit";
export const FORM_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Kalyan+Nagar,+Bengaluru&output=embed";
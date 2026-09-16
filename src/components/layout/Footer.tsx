import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS_LINE1,
  BUSINESS_ADDRESS_LINE2,
  BUSINESS_HOURS,
} from "@/lib/utils";

const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Our Process" },
  { to: "/contact", label: "Contact" },
  { to: "/get-a-quote", label: "Get a Quote" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + blurb */}
          <div className="lg:col-span-5">
            <img
              src="/assets/brand/wordmark.svg"
              alt="Prakash Interior Decors"
              className="h-11 w-auto object-contain brightness-0 invert"
              loading="lazy"
            />
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-ivory/60">
              A Bengaluru interior design &amp; architecture studio crafting warm,
              contemporary spaces designed around you — from concept and moodboards
              to the final coat of finish.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-oak hover:text-oak"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-oak hover:text-oak"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-[0.72rem] uppercase tracking-[0.25em] text-oak">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 font-sans text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-sans text-[0.72rem] uppercase tracking-[0.25em] text-oak">
              Visit the Studio
            </h3>
            <ul className="mt-6 space-y-4 font-sans text-sm text-ivory/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-oak" />
                <span>
                  {BUSINESS_ADDRESS_LINE1}
                  <br />
                  {BUSINESS_ADDRESS_LINE2}
                </span>
              </li>
              <li>
                <a
                  href="tel:+919591344715"
                  className="flex items-center gap-3 transition-colors hover:text-ivory"
                >
                  <Phone className="h-4.5 w-4.5 shrink-0 text-oak" />
                  {BUSINESS_PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:deepakmalviya185@gmail.com"
                  className="flex items-center gap-3 transition-colors hover:text-ivory"
                >
                  <Mail className="h-4.5 w-4.5 shrink-0 text-oak" />
                  {BUSINESS_EMAIL}
                </a>
              </li>
              <li className="text-ivory/50">{BUSINESS_HOURS}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[0.78rem] text-ivory/40">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="font-sans text-[0.78rem] text-ivory/40">
            Designed &amp; built in Bengaluru.
          </p>
        </div>
      </div>
    </footer>
  );
}
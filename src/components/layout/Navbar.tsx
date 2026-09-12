import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS_PHONE } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/QuoteModal";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Our Process" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer on route change.
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the drawer is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[50] transition-all duration-300",
        scrolled
          ? "border-b border-charcoal/5 bg-ivory/70 backdrop-blur-md shadow-sm shadow-charcoal/[0.03]"
          : "bg-ivory/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <Link to="/" className="relative z-[51] flex items-center">
          <img
            src="/assets/brand/wordmark.png"
            alt="Glenser Interior Studio"
            className="h-9 w-auto object-contain"
            loading="eager"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "relative font-sans text-[0.85rem] font-medium transition-colors hover:text-charcoal",
                  isActive ? "text-charcoal" : "text-muted"
                )
              }
            >
              {({ isActive }) => (
                <span className="group flex items-center gap-0.5">
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-oak transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919880810444"
            className="hidden items-center gap-2 font-sans text-sm font-medium text-charcoal transition-colors hover:text-oak-dark xl:flex"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS_PHONE}
          </a>

          {/* Quote modal trigger */}
          <QuoteModal
            trigger={
              <Button variant="accent" size="sm" className="hidden sm:inline-flex">
                Get a Quote
              </Button>
            }
          />

          <QuoteModal
            trigger={
              <Button variant="accent" size="sm" className="sm:hidden">
                Get a Quote
              </Button>
            }
          />

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-[51] flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-0 z-[50] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-x-0 top-[4.5rem] mx-4 rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-2xl shadow-charcoal/20"
            >
              <div className="flex flex-col divide-y divide-charcoal/8">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3, ease: "easeOut" }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center justify-between py-4 font-serif text-xl font-medium transition-colors",
                          isActive ? "text-charcoal" : "text-muted hover:text-charcoal"
                        )
                      }
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 text-oak" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <QuoteModal
                  trigger={
                    <Button variant="accent" size="lg" className="w-full">
                      Get a Quote
                    </Button>
                  }
                />
                <a
                  href="tel:+919880810444"
                  className="flex h-12 items-center justify-center gap-2 rounded-full border border-charcoal/15 font-sans text-sm font-medium text-charcoal"
                >
                  <Phone className="h-4 w-4" />
                  {BUSINESS_PHONE}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
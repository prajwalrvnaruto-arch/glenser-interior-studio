import { Outlet, useLocation } from "react-router-dom";
import * as React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

/**
 * Shared chrome: navbar + footer + floating WhatsApp.
 * Scrolls to top on route change with a subtle page fade.
 */
export function Layout() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Navbar />
      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
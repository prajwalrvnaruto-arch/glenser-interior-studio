import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("@/pages/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("@/pages/Services").then((m) => ({ default: m.Services })));
const Projects = lazy(() => import("@/pages/Projects").then((m) => ({ default: m.Projects })));
const ProjectDetail = lazy(() =>
  import("@/pages/ProjectDetail").then((m) => ({ default: m.ProjectDetail }))
);
const Process = lazy(() => import("@/pages/Process").then((m) => ({ default: m.Process })));
const Contact = lazy(() => import("@/pages/Contact").then((m) => ({ default: m.Contact })));
const GetAQuote = lazy(() => import("@/pages/GetAQuote").then((m) => ({ default: m.GetAQuote })));

/** Minimal skeleton shown while a route chunk loads. */
function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="h-8 w-8 animate-pulse rounded-full border-2 border-travertine border-t-oak" />
    </div>
  );
}

const SITE_NAME = "Prakash Interior Decors";

const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${SITE_NAME} — Interior Design & Decoration in Bengaluru.`,
    description:
      "Prakash Interior Decors — Professional interior design and decoration services in Kalyan Nagar, Bengaluru. Residential, commercial, modular kitchens and more.",
  },
  "/about": {
    title: `About Us — ${SITE_NAME}`,
    description:
      "Meet Prakash Interior Decors — a Bengaluru-based interior design and decoration practice dedicated to crafting beautiful, functional spaces.",
  },
  "/services": {
    title: `Our Services — ${SITE_NAME}`,
    description:
      "Interior design, modular kitchens, bedroom interiors, commercial spaces, and renovation — explore what we do at Prakash Interior Decors.",
  },
  "/projects": {
    title: `Our Projects — ${SITE_NAME}`,
    description:
      "Browse our portfolio of residential, commercial and apartment interior design projects in Bengaluru.",
  },
  "/process": {
    title: `Our Process — ${SITE_NAME}`,
    description:
      "From initial consultation to final handover — discover the four-step design process behind every Prakash Interior Decors project.",
  },
  "/contact": {
    title: `Contact Us — ${SITE_NAME}`,
    description:
      "Get in touch with Prakash Interior Decors in Kalyan Nagar, Bengaluru — phone, email, WhatsApp, or visit our studio.",
  },
  "/get-a-quote": {
    title: `Get a Quote — ${SITE_NAME}`,
    description:
      "Request a free quote for your interior design project. Tell us about your space and our team will get back to you within one working day.",
  },
};

/** Sets document.title and meta description on each route change. */
function RouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const route = ROUTE_META[pathname];
    document.title = route?.title ?? `${SITE_NAME} — Spaces Designed Around You.`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && route?.description) {
      metaDesc.setAttribute("content", route.description);
    }
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Sets document.title + meta description per route */}
      <RouteMeta />
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<RouteFallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<RouteFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="services"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="projects/:id"
            element={
              <Suspense fallback={<RouteFallback />}>
                <ProjectDetail />
              </Suspense>
            }
          />
          <Route
            path="process"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Process />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="get-a-quote"
            element={
              <Suspense fallback={<RouteFallback />}>
                <GetAQuote />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
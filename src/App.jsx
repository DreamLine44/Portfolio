import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import ErrorBoundary from "./components/ErrorBoundary";

const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Services = lazy(() => import("./sections/Services"));
const Projects = lazy(() => import("./sections/Projects"));
const Experience = lazy(() => import("./sections/Experience"));
const GithubShowcase = lazy(() => import("./sections/GithubShowcase"));
const Contact = lazy(() => import("./sections/Contact"));
const HiringCta = lazy(() => import("./sections/HiringCta"));

function SectionFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-primary)]" />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <GithubShowcase />
          <HiringCta />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </ErrorBoundary>
  );
}

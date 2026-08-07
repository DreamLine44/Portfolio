import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";
import Button from "./ui/Button";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  const handleNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="bg-glass/95 border-b border-[var(--color-border)]/70 backdrop-blur-xl shadow-sm shadow-slate-900/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="focus-ring font-[var(--font-display)] text-lg font-extrabold text-[var(--color-navy)] dark:text-white flex items-center gap-1.5"
          >
            <span className="text-[var(--color-primary)] font-mono">{"</>"}</span>
            Alhassan<span className="text-gradient">.dev</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="relative">
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`focus-ring relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeId === link.id
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-purple)]"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="focus-ring grid h-11 w-11 place-items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
            </button>
            <Button
              as="a"
              href="/resume/Alhassan_Tarawally_CV.pdf"
              download
              variant="primary"
              className="hidden sm:inline-flex"
            >
              Download CV
            </Button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-[var(--color-border)] text-[var(--color-navy)] dark:text-white lg:hidden"
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden border-t border-[var(--color-border)]"
            >
              <ul className="flex flex-col gap-1 px-5 py-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`focus-ring block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                        activeId === link.id
                          ? "bg-[var(--color-bg-secondary)] text-[var(--color-primary)]"
                          : "text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <Button
                    as="a"
                    href="/resume/Alhassan_Tarawally_CV.pdf"
                    download
                    variant="primary"
                    className="w-full"
                  >
                    Download CV
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

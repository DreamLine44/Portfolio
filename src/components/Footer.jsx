import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from "react-icons/fi";
import { socials } from "../data/experience";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} Alhassan Trawally. Built with React,
          Tailwind CSS <span aria-hidden>❤️</span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
          >
            <FiGithub size={17} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
          >
            <FiLinkedin size={17} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="focus-ring text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
          >
            <FiTwitter size={17} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="focus-ring text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
          >
            <FiMail size={17} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="focus-ring ml-2 grid h-9 w-9 place-items-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
          >
            <FiArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value up from 0 when the target element scrolls
 * into view. Non-numeric strings (e.g. "Full-Stack") are returned as-is.
 */
export function useCountUp(value, duration = 1200) {
  const numericMatch = String(value).match(/\d+/);
  const numericTarget = numericMatch ? parseInt(numericMatch[0], 10) : null;
  const prefix = numericMatch ? String(value).slice(0, numericMatch.index) : "";
  const suffix = numericMatch
    ? String(value).slice(numericMatch.index + numericMatch[0].length)
    : "";

  const [display, setDisplay] = useState(numericTarget === null ? value : 0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (numericTarget === null) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * numericTarget));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [numericTarget, duration]);

  const formatted = numericTarget === null ? value : `${prefix}${display}${suffix}`;
  return [ref, formatted];
}

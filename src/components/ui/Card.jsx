export default function Card({ children, className = "", hover = true, as: Tag = "div", ...props }) {
  return (
    <Tag
      className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-sm ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 hover:border-[var(--color-secondary-blue)]/40"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

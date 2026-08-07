export default function Card({ children, className = "", hover = true, as: Tag = "div", ...props }) {
  return (
    <Tag
      className={`rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_25px_50px_-35px_rgba(15,23,42,0.3)] ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(79,70,229,0.35)] hover:border-[var(--color-secondary-blue)]/35"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

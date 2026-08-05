const variants = {
  primary:
    "text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-purple)] hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5",
  secondary:
    "bg-[var(--color-card)] text-[var(--color-navy)] dark:text-white border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:-translate-y-0.5",
  ghost:
    "text-[var(--color-navy)] dark:text-white hover:bg-[var(--color-bg-secondary)]",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  className = "",
  children,
  icon,
  ...props
}) {
  return (
    <Tag
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </Tag>
  );
}

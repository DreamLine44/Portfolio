const variants = {
  primary:
    "text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-purple)] shadow-[0_25px_60px_-30px_rgba(79,70,229,0.75)] hover:shadow-[0_30px_70px_-35px_rgba(79,70,229,0.6)] hover:-translate-y-0.5",
  secondary:
    "bg-[var(--color-bg-secondary)] text-[var(--color-primary)] border border-[var(--color-primary)]/20 shadow-sm hover:bg-white hover:shadow-md hover:border-[var(--color-primary)]/40 dark:bg-white/5 dark:text-white dark:border-white/10",
  ghost:
    "text-[var(--color-primary)] hover:text-[var(--color-accent-purple)] hover:bg-[var(--color-bg-secondary)]/70 dark:hover:bg-white/5",
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
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-[1rem] px-5 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </Tag>
  );
}

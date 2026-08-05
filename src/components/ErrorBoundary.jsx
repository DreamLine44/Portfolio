import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Portfolio render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[var(--color-bg)] px-6 text-center">
          <h1 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-navy)]">
            Something went wrong
          </h1>
          <p className="max-w-md text-[var(--color-text-secondary)]">
            This section failed to load. Try refreshing the page — the rest
            of the site is unaffected.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

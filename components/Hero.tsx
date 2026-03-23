export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center px-5 py-24 md:py-36 font-sans">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-lighter) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-[0.08em] uppercase mb-6">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
          Four Episodes &middot; Four Leaders
        </div>

        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.08] tracking-tight text-foreground mb-6 text-balance">
          Anthropic on Lenny&rsquo;s Podcast
        </h1>

        <p className="text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed text-muted max-w-[640px] mx-auto text-pretty">
          Insights from four Anthropic leaders on culture, products, skills, and
          recommended reading — drawn from their conversations with Lenny
          Rachitsky
        </p>
      </div>
    </section>
  );
}

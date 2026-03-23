import { cultureThemes, type CultureTheme } from "@/lib/data";

export default function CultureSection() {
  return (
    <section
      id="culture"
      className="py-20 md:py-28 font-sans"
      style={{ backgroundColor: "var(--color-surface-2)" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-[0.1em] uppercase mb-3">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Culture
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-normal tracking-tight text-foreground">
            What Makes Anthropic Different
          </h2>
          <p className="text-base text-muted mt-2 max-w-lg">
            Key themes that emerged across all four conversations about
            Anthropic&rsquo;s culture.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-14">
          {cultureThemes.map((theme) => (
            <CultureThemeBlock key={theme.name} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CultureThemeBlock({ theme }: { theme: CultureTheme }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-10 items-start">
      {/* Label */}
      <div className="md:sticky md:top-20">
        <div
          className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-3 text-accent"
          style={{ backgroundColor: "var(--color-accent-light)" }}
        >
          <ThemeIcon name={theme.icon} />
        </div>
        <h3 className="font-serif text-[1.35rem] font-normal text-foreground">
          {theme.name}
        </h3>
      </div>

      {/* Quotes */}
      <div className="flex flex-col gap-3">
        {theme.quotes.map((quote, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-[10px] px-4 py-4 md:px-6 md:py-5 transition-all duration-200 hover:shadow-sm hover:border-[color-mix(in_srgb,var(--color-accent)_30%,var(--color-border))]"
          >
            <p className="text-[0.9375rem] leading-relaxed text-foreground">
              {quote.text.startsWith("\u201c") || quote.text.startsWith('"') ? (
                <>&ldquo;{quote.text.replace(/^[""]/, "").replace(/[""]$/, "")}&rdquo;</>
              ) : (
                quote.text
              )}
            </p>
            <div className="mt-2 text-xs font-semibold text-accent">
              {quote.attr}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThemeIcon({ name }: { name: CultureTheme["icon"] }) {
  if (name === "shield")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  if (name === "zap")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  if (name === "code")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

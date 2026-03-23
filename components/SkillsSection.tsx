import { skillCards } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 font-sans">
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
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            Most Important Skill
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-normal tracking-tight text-foreground">
            Most Valued Skills at Anthropic
          </h2>
        </div>

        {/* Highlight banner */}
        <div
          className="relative overflow-hidden rounded-2xl p-6 md:p-10 mb-8 md:mb-12"
          style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
        >
          <div
            className="pointer-events-none absolute -top-1/2 -right-1/5 w-[400px] h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <h3 className="font-serif text-[clamp(1.35rem,2.5vw,2rem)] font-normal mb-3 relative">
            The single thread across all four interviews
          </h3>
          <p className="text-base leading-relaxed opacity-90 max-w-2xl relative">
            Be deeply curious, technically proficient, and willing to build with
            AI tools at the frontier. Every guest emphasized that the people who
            thrive at Anthropic are those who lean into new tools, think from
            first principles, and never stop learning.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {skillCards.map((card) => (
            <div
              key={card.initials}
              className="bg-surface border border-border rounded-xl px-5 py-5 md:px-7 md:py-7 transition-all duration-300 hover:shadow-md hover:border-accent"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-base text-white mb-3"
                style={{ backgroundColor: "var(--color-accent)" }}
                aria-hidden="true"
              >
                {card.initials}
              </div>
              <h4 className="font-serif text-[1.15rem] font-normal text-foreground mb-2">
                {card.name}
              </h4>
              <p className="text-sm leading-relaxed text-muted">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

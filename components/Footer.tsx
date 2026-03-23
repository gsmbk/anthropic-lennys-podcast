export default function Footer() {
  return (
    <footer
      className="border-t border-divider py-10 font-sans"
    >
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col items-center gap-4 text-center">
        <p className="text-xs text-faint leading-relaxed">
          Data gathered from Lenny&rsquo;s Podcast episodes. Sources linked
          throughout.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a
            href="https://www.lennysnewsletter.com/podcast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-accent transition-colors duration-200"
          >
            Lenny&rsquo;s Podcast
          </a>
          <span className="text-faint text-xs" aria-hidden="true">
            &middot;
          </span>
          <a
            href="https://www.anthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-accent transition-colors duration-200"
          >
            Anthropic
          </a>
          <span className="text-faint text-xs" aria-hidden="true">
            &middot;
          </span>
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-accent transition-colors duration-200"
          >
            Created with Perplexity Computer
          </a>
        </div>

        <p className="text-xs text-faint">
          Made by{" "}
          <a
            href="https://gsmbk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:opacity-75 transition-opacity"
          >
            Geo Morjane
          </a>
        </p>
      </div>
    </footer>
  );
}

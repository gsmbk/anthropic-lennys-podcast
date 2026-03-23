import Image from "next/image";
import { guests, type Guest, type SocialLink } from "@/lib/data";

export default function GuestsSection() {
  return (
    <section id="guests" className="py-20 md:py-28 font-sans">
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            The Guests
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-normal tracking-tight text-foreground">
            Four Anthropic Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {guests.map((guest) => (
            <GuestCard key={guest.name} guest={guest} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GuestCard({ guest }: { guest: Guest }) {
  return (
    <article
      className="rounded-xl overflow-hidden border border-border bg-surface transition-all duration-300 hover:shadow-md hover:border-accent"
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-surface-2">
        <Image
          src={guest.image}
          alt={`${guest.name} on Lenny's Podcast`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => {}}
        />
      </div>

      <div className="p-5 md:p-7">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="shrink-0 w-13 h-13 rounded-full flex items-center justify-center font-serif text-xl text-white leading-none"
            style={{
              width: 52,
              height: 52,
              backgroundColor: "var(--color-accent)",
            }}
            aria-hidden="true"
          >
            {guest.initials}
          </div>
          <div>
            <h3 className="font-serif text-[clamp(1.2rem,1.5vw,1.5rem)] font-normal text-foreground">
              {guest.name}
            </h3>
            <div className="text-sm font-medium text-accent mt-0.5">
              {guest.role}
            </div>
          </div>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-4">{guest.bio}</p>

        {/* Episode */}
        <div className="pt-4 border-t border-divider">
          <a
            href={guest.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shrink-0"
              aria-hidden="true"
            >
              <path d="M23 12l-22 12V0z" />
            </svg>
            {guest.episodeTitle}
          </a>

          <div className="flex items-center gap-3 mt-2 text-xs text-faint">
            <span className="flex items-center gap-1">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {guest.date}
            </span>
            <span className="flex items-center gap-1">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {guest.duration}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-3">
            <a
              href={guest.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:opacity-75 transition-opacity"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23 12l-22 12V0z" />
              </svg>
              YouTube
            </a>
            <a
              href={guest.transcriptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:opacity-75 transition-opacity"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Transcript
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-divider">
          <span className="text-xs text-muted w-full mb-1">
            Find {guest.name.split(" ")[0]} online
          </span>
          {guest.socials.map((social) => (
            <SocialIconLink key={social.type} social={social} name={guest.name} />
          ))}
        </div>
      </div>
    </article>
  );
}

function SocialIconLink({ social, name }: { social: SocialLink; name: string }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on ${social.label}`}
      className="inline-flex items-center justify-center w-8 h-8 rounded-md text-muted bg-surface-2 hover:text-accent hover:bg-[var(--color-accent-light)] transition-all duration-200"
    >
      {social.type === "x" && (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )}
      {social.type === "linkedin" && (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )}
      {social.type === "website" && (
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )}
      {social.type === "substack" && (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      )}
    </a>
  );
}

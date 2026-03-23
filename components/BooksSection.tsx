import Image from "next/image";
import { recommenders, type Book, type Recommender } from "@/lib/data";

export default function BooksSection() {
  return (
    <section id="books" className="py-20 md:py-28 font-sans">
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
            Reading List
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-normal tracking-tight text-foreground">
            Book Recommendations
          </h2>
          <p className="text-base text-muted mt-2 max-w-lg">
            What Anthropic&rsquo;s leaders are reading — from AI safety to sci-fi to
            management classics.
          </p>
        </div>

        <div className="flex flex-col gap-14 md:gap-16">
          {recommenders.map((rec) => (
            <RecommenderBlock key={rec.initials} rec={rec} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecommenderBlock({ rec }: { rec: Recommender }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm text-white shrink-0"
          style={{ backgroundColor: "var(--color-accent)" }}
          aria-hidden="true"
        >
          {rec.initials}
        </div>
        <h3 className="font-serif text-[1.2rem] font-normal text-foreground">
          {rec.name} recommends
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {rec.books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-surface border border-border rounded-[10px] p-4 flex gap-4 items-start transition-all duration-200 hover:shadow-sm hover:border-accent">
      {/* Book cover */}
      <div className="shrink-0 relative w-20 h-[120px] rounded-sm overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
        <Image
          src={book.image}
          alt={`${book.title} book cover`}
          fill
          className="object-cover"
          sizes="80px"
          onError={() => {}}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="font-serif text-[1rem] font-normal leading-snug text-foreground mb-1">
          {book.title}
        </div>
        <div className="text-xs text-muted mb-1.5">{book.author}</div>
        {book.note && (
          <div className="text-[0.75rem] italic text-faint leading-relaxed mb-2">
            {book.note}
          </div>
        )}
        <a
          href={book.linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:opacity-75 transition-opacity"
        >
          <LinkIcon type={book.linkLabel} />
          {book.linkLabel}
        </a>
      </div>
    </div>
  );
}

function LinkIcon({ type }: { type: string }) {
  if (type === "Audiobook")
    return (
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zm-18 0a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    );
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

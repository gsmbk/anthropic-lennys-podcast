"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const navLinks = [
    { href: "#guests", label: "Guests" },
    { href: "#culture", label: "Culture" },
    { href: "#skills", label: "Skills" },
    { href: "#products", label: "Products" },
    { href: "#books", label: "Books" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-divider transition-all duration-300 font-sans ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-[1.1rem] md:text-[1.3rem] text-foreground whitespace-nowrap tracking-tight"
        >
          Anthropic <span className="text-accent">&times;</span> Lenny&rsquo;s
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-accent transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </nav>

        {/* Mobile row */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex flex-col gap-[5px] p-2 min-h-[44px] min-w-[44px] items-center justify-center"
          >
            <span
              className="block w-5 h-[1.5px] bg-foreground transition-transform duration-300"
              style={{
                transform: menuOpen
                  ? "translateY(6.5px) rotate(45deg)"
                  : undefined,
              }}
            />
            <span
              className="block w-5 h-[1.5px] bg-foreground transition-opacity duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-[1.5px] bg-foreground transition-transform duration-300"
              style={{
                transform: menuOpen
                  ? "translateY(-6.5px) rotate(-45deg)"
                  : undefined,
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden flex flex-col border-t border-divider px-5 py-4 gap-1 shadow-md"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-muted hover:text-accent transition-colors py-2 min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex items-center justify-center w-9 h-9 rounded-full text-muted hover:text-accent hover:bg-[var(--color-accent-light)] transition-all duration-200 min-h-[44px] min-w-[44px]"
    >
      {theme === "dark" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

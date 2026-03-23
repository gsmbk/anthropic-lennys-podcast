/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "-apple-system", "sans-serif"],
        serif: ["var(--font-display)", "Instrument Serif", "Georgia", "serif"],
      },
      colors: {
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        foreground: "var(--color-text)",
        muted: "var(--color-text-muted)",
        faint: "var(--color-text-faint)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-light": "var(--color-accent-light)",
        border: "var(--color-border)",
        divider: "var(--color-divider)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
    },
  },
  plugins: [],
};

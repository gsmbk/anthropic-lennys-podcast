import { products } from "@/lib/data";

export default function ProductsSection() {
  return (
    <section
      id="products"
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
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Products
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-normal tracking-tight text-foreground">
            What Excites Them
          </h2>
          <p className="text-base text-muted mt-2 max-w-lg">
            The products and capabilities the guests are most passionate about.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-surface border border-border rounded-[10px] px-4 py-4 md:px-6 md:py-5 grid grid-cols-1 md:grid-cols-[200px_180px_1fr] gap-2 md:gap-6 items-start transition-all duration-200 hover:shadow-sm hover:border-accent"
            >
              <div className="font-serif text-[1.15rem] font-normal text-foreground">
                {product.name}
              </div>
              <div className="text-xs font-semibold text-accent leading-relaxed">
                {product.who}
              </div>
              <div className="text-sm leading-relaxed text-muted">
                {product.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

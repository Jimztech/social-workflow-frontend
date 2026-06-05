"use client";

const items = [
  { quote: "I finally stay consistent without thinking about it.", name: "Maya R.", role: "Content creator", initials: "MR" },
  { quote: "Posting across platforms is now effortless.", name: "Daniel K.", role: "Founder", initials: "DK" },
  { quote: "This saves me so much time every week.", name: "Priya S.", role: "Social media manager", initials: "PS" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[image:var(--gradient-subtle)] border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What users are saying</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <blockquote className="text-base leading-relaxed text-foreground">&quot;{t.quote}&quot;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground text-sm font-semibold">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
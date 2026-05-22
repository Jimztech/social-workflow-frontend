"use client";

import { HeroMockup } from "./HeroMockup";

export function ProductPreview() {
  return (
    <section id="preview" className="py-20 md:py-28 bg-[image:var(--gradient-subtle)] border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">See your posts before they go live</h2>
          <p className="mt-4 text-muted-foreground">
            Switch between Instagram, X, and LinkedIn previews instantly. What you see is exactly what gets published.
          </p>
        </div>
        <div className="mt-14 flex justify-center">
          <HeroMockup large />
        </div>
      </div>
    </section>
  );
}
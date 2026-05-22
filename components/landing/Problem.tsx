"use client";

import { Clock, PenLine, Layers, TrendingDown } from "lucide-react";

const points = [
  { Icon: PenLine, text: "Thinking of posts takes time" },
  { Icon: Clock, text: "Writing captions slows you down" },
  { Icon: Layers, text: "Managing multiple platforms is stressful" },
  { Icon: TrendingDown, text: "Consistency becomes hard to maintain" },
];

export function Problem() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Posting consistently takes more time than it should
        </h2>
        <p className="mt-4 text-muted-foreground">
          Most creators struggle to stay active online because of the same few things.
        </p>
        <ul className="mt-10 grid sm:grid-cols-2 gap-3 text-left">
          {points.map(({ Icon, text }) => (
            <li key={text} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
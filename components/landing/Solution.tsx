"use client";

import { Sparkles, Calendar, Send, ArrowRight } from "lucide-react";

const steps = [
  { Icon: Sparkles, title: "Create", text: "Draft a post or let AI write one for you in seconds." },
  { Icon: Calendar, title: "Schedule", text: "Pick the perfect time, once a day or once a week." },
  { Icon: Send, title: "Publish", text: "Posts go live on your accounts automatically." },
];

export function Solution() {
  return (
    <section className="py-20 md:py-28 bg-[image:var(--gradient-subtle)] border-y border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            A simpler way to handle your social media
          </h2>
          <p className="mt-4 text-muted-foreground">
            Create your posts, set when you want them to go live, and they appear on your social accounts without extra work.
          </p>
        </div>
        <div className="mt-14 flex flex-col md:flex-row items-stretch gap-4">
          {steps.map(({ Icon, title, text }, i) => (
            <div key={title} className="flex flex-col md:flex-row md:items-center gap-4 md:flex-1">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] flex-1">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{i + 1}. {title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center shrink-0">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
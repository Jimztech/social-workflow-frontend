"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dotted texture background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "var(--hero-texture)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 min-h-[640px]">
        {/* Floating decorative cards */}
        {/* Top-left: sticky note + check tile */}
        <div className="hidden md:block absolute left-4 lg:left-10 top-6 lg:top-10 rotate-[-6deg] z-10">
          <div className="relative">
            <span className="absolute left-1/2 -top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-rose-500 shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
            <div className="w-[180px] bg-[#fdf4a3] p-4 shadow-[var(--shadow-card)] rounded-sm" style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}>
              <p className="text-[15px] leading-snug text-foreground/80">
                Write 3 posts a week to stay consistent and grow faster ✨
              </p>
            </div>
          </div>
          <div className="mt-3 ml-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card shadow-[var(--shadow-card)] rotate-[8deg]">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
          </div>
        </div>

        {/* Top-right: schedule card */}
        <div className="hidden md:block absolute right-4 lg:right-10 top-6 lg:top-10 rotate-[5deg] z-10">
          <div className="flex items-start gap-3">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-card shadow-[var(--shadow-card)] -rotate-[8deg]">
              <Calendar className="h-6 w-6 text-foreground/80" />
            </div>
            <div className="w-[200px] rounded-xl bg-card p-3 shadow-[var(--shadow-card)] border border-border/60">
              <div className="text-xs font-semibold text-foreground">Scheduled</div>
              <div className="mt-2 space-y-1.5">
                <div className="text-[11px] text-muted-foreground">Next post</div>
                <div className="text-[13px] font-medium">Product launch teaser</div>
                <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-[11px] text-muted-foreground">
                  <Calendar className="h-3 w-3" /> Tue · 9:00 AM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-left: post queue card */}
        <div className="hidden md:block absolute left-4 lg:left-10 bottom-2 lg:bottom-6 -rotate-[4deg] z-10">
          <div className="w-[260px] rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] border border-border/60">
            <div className="text-[13px] font-semibold mb-3">This week&apos;s posts</div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-md bg-gradient-to-br from-fuchsia-500 to-orange-400 flex items-center justify-center text-white">
                  <FaInstagram size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-medium truncate">Behind the scenes</div>
                  <div className="text-[10px] text-muted-foreground">Mon · 10:00</div>
                </div>
                <span className="text-[10px] text-muted-foreground">60%</span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-3/5 bg-primary rounded-full" />
              </div>
              <div className="flex items-center gap-3 pt-1">
                <div className="h-7 w-7 rounded-md bg-foreground flex items-center justify-center text-background">
                  <FaXTwitter size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-medium truncate">Thread on consistency</div>
                  <div className="text-[10px] text-muted-foreground">Wed · 14:30</div>
                </div>
                <span className="text-[10px] text-muted-foreground">100%</span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-full bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-right: 3 platforms */}
        <div className="hidden md:block absolute right-4 lg:right-10 bottom-2 lg:bottom-6 rotate-[4deg] z-10">
          <div className="rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] border border-border/60">
            <div className="text-[12px] font-semibold mb-3 text-center">3 platforms · 1 click</div>
            <div className="flex gap-3">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 flex items-center justify-center text-white shadow-[var(--shadow-soft)]">
                <FaInstagram size={24} />
              </div>
              <div className="h-14 w-14 rounded-xl bg-foreground flex items-center justify-center text-background shadow-[var(--shadow-soft)]">
                <FaXTwitter size={24} />
              </div>
              <div className="h-14 w-14 rounded-xl bg-[#0a66c2] flex items-center justify-center text-white shadow-[var(--shadow-soft)]">
                <FaLinkedin size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="relative z-0 text-center max-w-4xl mx-auto pt-16 md:pt-20">
          {/* Logo mark */}
          <div className="mx-auto mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-[var(--shadow-card)]">
            <span className="relative inline-flex h-8 w-8 items-center justify-center">
              <span className="absolute left-0 top-0 h-3 w-3 rounded-full bg-primary" />
              <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-foreground/85" />
              <span className="absolute left-0 bottom-0 h-3 w-3 rounded-full bg-foreground/85" />
              <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full bg-foreground/85" />
            </span>
          </div>

          <h1 className="text-[44px] md:text-[76px] font-bold tracking-tight leading-[1.02] text-foreground">
            Create, schedule, and post
            <br />
            <span className="text-muted-foreground/70 font-bold">all in one place</span>
          </h1>
          <p className="mt-7 text-base md:text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed">
            Write posts with AI and publish to Instagram, X, and LinkedIn — without doing everything manually.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Button
              size="lg"
              className="rounded-full h-12 px-7 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-glow)] font-medium"
              asChild
            >
              <Link href="/sign-up">Get started free</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
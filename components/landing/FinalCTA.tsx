"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16 text-center shadow-[var(--shadow-elevated)] bg-card">
          <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] opacity-100" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.18_295/0.3),transparent_70%)]" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Start posting consistently today</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Join creators making it easier to stay active on social media.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)] hover:opacity-90 transition-opacity h-12 px-7 text-base" asChild>
              <Link href="/sign-up">
                Get started free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
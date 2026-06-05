"use client";

import Image from "next/image";
import { Camera, Megaphone, Rocket, Briefcase, LucideIcon } from "lucide-react";

const cases: {
  title: string;
  text: string;
  image: string;
  Badge: LucideIcon;
  badgeClass: string;
}[] = [
  {
    title: "Content creators",
    text: "Show up daily without burning out.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces",
    Badge: Camera,
    badgeClass: "bg-primary text-primary-foreground",
  },
  {
    title: "Social media managers",
    text: "Run multiple brands from one calendar.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
    Badge: Megaphone,
    badgeClass: "bg-foreground text-background",
  },
  {
    title: "Founders",
    text: "Build in public without losing focus.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    Badge: Rocket,
    badgeClass: "bg-primary text-primary-foreground",
  },
  {
    title: "Freelancers",
    text: "Stay visible while you ship client work.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    Badge: Briefcase,
    badgeClass: "bg-foreground text-background",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for creators like you</h2>
          <p className="mt-3 text-muted-foreground">Real people using Sociafy to stay consistent online.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map(({ title, text, image, Badge, badgeClass }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] text-center transition-transform hover:-translate-y-1"
            >
              <div className="relative mx-auto h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-xl" />
                <Image
                  src={image}
                  alt={title}
                  width={96}
                  height={96}
                  className="relative rounded-full object-cover ring-4 ring-background shadow-[var(--shadow-soft)]"
                />
                <div className={`absolute -bottom-1 -right-1 h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-card ${badgeClass}`}>
                  <Badge className="h-4 w-4" />
                </div>
              </div>
              <h3 className="mt-6 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
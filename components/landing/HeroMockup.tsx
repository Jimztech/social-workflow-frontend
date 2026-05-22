"use client";

import { useState } from "react";
import { Sparkles, Calendar, Image as ImageIcon, Hash } from "lucide-react";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { PreviewCard } from "./PreviewCard";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type Platform = "instagram" | "x" | "linkedin";

const tabs: { id: Platform; label: string; Icon: IconType }[] = [
  { id: "instagram", label: "Instagram", Icon: FaInstagram },
  { id: "x", label: "X", Icon: FaXTwitter },
  { id: "linkedin", label: "LinkedIn", Icon: FaLinkedin },
];

export function HeroMockup({ large = false }: { large?: boolean }) {
  const [active, setActive] = useState<Platform>("instagram");

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-3 md:p-4 shadow-[var(--shadow-elevated)]",
        large ? "max-w-5xl" : "max-w-4xl",
      )}
    >
      <div className="absolute -inset-px rounded-2xl bg-[image:var(--gradient-primary)] opacity-20 blur-2xl -z-10" />
      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
        {/* Editor */}
        <div className="rounded-xl border border-border bg-background p-4 md:p-5 flex flex-col">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mb-3">
            <div className="h-2 w-2 rounded-full bg-[oklch(0.7_0.18_150)]" />
            New post
          </div>
          <textarea
            readOnly
            className="flex-1 min-h-[140px] resize-none bg-transparent text-sm leading-relaxed text-foreground focus:outline-none"
            value={"Three lessons from shipping every week for a year — consistency compounds in ways you can't predict. Thread 👇"}
          />
          <div className="flex items-center gap-2 pt-3 border-t border-border">
            <button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md hover:bg-muted text-muted-foreground transition-colors">
              <ImageIcon className="h-3.5 w-3.5" /> Media
            </button>
            <button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md hover:bg-muted text-muted-foreground transition-colors">
              <Hash className="h-3.5 w-3.5" /> Tags
            </button>
            <button className="ml-auto inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-accent text-accent-foreground font-medium">
              <Sparkles className="h-3.5 w-3.5" /> AI rewrite
            </button>
          </div>
          <button className="mt-3 inline-flex items-center justify-center gap-2 w-full h-10 rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground text-sm font-semibold shadow-[var(--shadow-glow)] hover:opacity-95 transition-opacity">
            <Calendar className="h-4 w-4" /> Schedule for Tue, 9:00 AM
          </button>
        </div>

        {/* Preview */}
        <div className="rounded-xl border border-border bg-[image:var(--gradient-subtle)] p-4 md:p-5">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/60 mb-4">
            {tabs.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={cn(
                  "flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium py-1.5 rounded-md transition-all",
                  active === id
                    ? "bg-card text-foreground shadow-[var(--shadow-soft)]"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon size={14} /> {label}
              </button>
            ))}
          </div>
          <PreviewCard platform={active} />
        </div>
      </div>
    </div>
  );
}
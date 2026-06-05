"use client";

import { cn } from "@/lib/utils";

export function DotLogo({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-7 w-7 items-center justify-center", className)}>
      <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-primary" />
      <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-foreground/85" />
      <span className="absolute left-0 bottom-0 h-2.5 w-2.5 rounded-full bg-foreground/85" />
      <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-foreground/85" />
    </span>
  );
}
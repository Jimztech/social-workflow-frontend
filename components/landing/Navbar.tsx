"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-foreground/85" />
            <span className="absolute left-0 bottom-0 h-2.5 w-2.5 rounded-full bg-foreground/85" />
            <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-foreground/85" />
          </span>
          <span>Sociafy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#preview" className="hover:text-foreground transition-colors">Solutions</a>
          <a href="#use-cases" className="hover:text-foreground transition-colors">Resources</a>
        </nav>
        <div className="flex items-center gap-5">
          <Link href="/sign-in" className="hidden sm:inline text-sm text-foreground/80 hover:text-foreground transition-colors">Sign in</Link>
          <Button variant="outline" className="rounded-full border-foreground/20 hover:bg-foreground hover:text-background transition-colors" asChild>
            <Link href="/sign-up">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
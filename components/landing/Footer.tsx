"use client";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-foreground/85" />
            <span className="absolute left-0 bottom-0 h-2.5 w-2.5 rounded-full bg-foreground/85" />
            <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-foreground/85" />
          </span>
          Sociafy
        </div>
        <p>Create once. Schedule. Publish everywhere.</p>
        <p>© {new Date().getFullYear()} Sociafy</p>
      </div>
    </footer>
  );
}

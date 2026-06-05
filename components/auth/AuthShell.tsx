import Link from "next/link";
import { DotLogo } from "@/components/landing/DotLogo";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "var(--hero-texture)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />

      <header className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <DotLogo />
          <span>Sociafy</span>
        </Link>
        <Link
          href="/"
          className="text-sm text-foreground/70 hover:text-foreground transition-colors"
        >
          Back to home
        </Link>
      </header>

      <section className="mx-auto max-w-md px-6 pt-10 pb-16">
        <div className="text-center mb-8">
          <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-[var(--shadow-card)]">
            <DotLogo className="h-7 w-7" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-foreground/70">{subtitle}</p>
        </div>

        <div className="rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-[var(--shadow-card)]">
          {children}
        </div>

        <p className="mt-6 text-center text-sm text-foreground/70">{footer}</p>
      </section>
    </main>
  );
}

export function GoogleButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full inline-flex items-center justify-center gap-3 h-11 rounded-full border border-border bg-background hover:bg-muted transition-colors text-sm font-medium"
    >
      <GoogleIcon />
      {label}
    </button>
  );
}

export function OrDivider() {
  return (
    <div className="my-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-border" />
      <span className="text-xs uppercase tracking-wider text-muted-foreground">or</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.3 0-11.5-5.2-11.5-11.5S17.7 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.7 6.4 29.1 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.7 6.4 29.1 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 43.5c5 0 9.6-1.9 13-5l-6-5.1c-2 1.4-4.4 2.1-7 2.1-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.6 39 16.2 43.5 24 43.5z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4-4 5.4l6 5.1c-.4.4 6.7-4.9 6.7-14.5 0-1.2-.1-2.4-.4-3.5z" />
    </svg>
  );
}
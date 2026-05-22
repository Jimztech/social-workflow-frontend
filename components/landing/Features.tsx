import { Sparkles, CalendarClock, LayoutGrid } from "lucide-react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

const features: { Icon: LucideIcon | IconType; title: string; text: string }[] = [
  { Icon: Sparkles, title: "Create posts with AI", text: "Generate captions, hooks, and threads in seconds." },
  { Icon: CalendarClock, title: "Schedule ahead of time", text: "Plan a week or month of content in one sitting." },
  { Icon: FaInstagram, title: "Post to Instagram", text: "Publish to your feed with one click." },
  { Icon: FaXTwitter, title: "Post to X (Twitter)", text: "Send single posts or full threads automatically." },
  { Icon: FaLinkedin, title: "Post to LinkedIn", text: "Share professional updates without switching tabs." },
  { Icon: LayoutGrid, title: "Everything in one place", text: "Manage all your content from a single dashboard." },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What you can do</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to stay consistent — and nothing you don&apos;t.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
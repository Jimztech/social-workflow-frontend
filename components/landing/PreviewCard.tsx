import { Heart, MessageCircle, Repeat2, Send, Bookmark, ThumbsUp, Share2 } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

type Platform = "instagram" | "x" | "linkedin";

const sampleCaption = "Three lessons from shipping every week for a year — consistency compounds in ways you can't predict. Thread 👇";

const avatars = {
  instagram: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop&crop=faces",
  x: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces",
  linkedin: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces",
};
const instagramPost = "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=800&fit=crop";

export function PreviewCard({ platform }: { platform: Platform }) {
  if (platform === "instagram") {
    return (
      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border">
          <Image src={avatars.instagram} alt="@chioma" width={28} height={28} className="rounded-full object-cover" />
          <div className="text-xs font-semibold">chioma.creates</div>
          <FaInstagram size={16} className="ml-auto text-muted-foreground" />
        </div>
        <div className="aspect-square relative overflow-hidden">
          <Image src={instagramPost} alt="Lifestyle post" fill className="object-cover" />
        </div>
        <div className="px-3 py-2.5 space-y-2">
          <div className="flex items-center gap-3 text-foreground">
            <Heart className="h-5 w-5" />
            <MessageCircle className="h-5 w-5" />
            <Send className="h-5 w-5" />
            <Bookmark className="ml-auto h-5 w-5" />
          </div>
          <p className="text-xs leading-relaxed">
            <span className="font-semibold">chioma.creates</span> {sampleCaption}
          </p>
        </div>
      </div>
    );
  }

  if (platform === "x") {
    return (
      <div className="rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
        <div className="flex gap-3">
          <Image src={avatars.x} alt="@ify" width={40} height={40} className="rounded-full object-cover shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 text-sm">
              <span className="font-bold">Ify</span>
              <span className="text-muted-foreground">@ifywrites · 2m</span>
            </div>
            <p className="text-sm mt-1 leading-relaxed">{sampleCaption}</p>
            <div className="mt-3 flex items-center justify-between text-muted-foreground max-w-xs">
              <MessageCircle className="h-4 w-4" />
              <Repeat2 className="h-4 w-4" />
              <Heart className="h-4 w-4" />
              <Share2 className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
      <div className="flex gap-3 items-start">
        <Image src={avatars.linkedin} alt="Chioma Okafor" width={44} height={44} className="rounded-full object-cover shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold">Chioma Okafor</div>
          <div className="text-xs text-muted-foreground">Building in public · 2m</div>
        </div>
        <FaLinkedin size={16} className="text-muted-foreground" />
      </div>
      <p className="text-sm mt-3 leading-relaxed">{sampleCaption}</p>
      <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1"><ThumbsUp className="h-3.5 w-3.5" /> Like</span>
        <span className="inline-flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5" /> Comment</span>
        <span className="inline-flex items-center gap-1"><Repeat2 className="h-3.5 w-3.5" /> Repost</span>
        <span className="inline-flex items-center gap-1"><Send className="h-3.5 w-3.5" /> Send</span>
      </div>
    </div>
  );
}
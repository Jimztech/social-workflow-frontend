import type { Metadata } from "next";
import { Inter, Caveat, Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Sociafy — Create & schedule social posts with AI",
  description:
    "Create posts with AI, schedule them in minutes, and publish across Instagram, X, and LinkedIn from one place.",
  authors: [{ name: "Sociafy" }],
  openGraph: {
    title: "Sociafy — Create & schedule social posts with AI",
    description:
      "Create posts with AI, schedule them in minutes, and publish across Instagram, X, and LinkedIn from one place.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Sociafy",
    title: "Sociafy — Create & schedule social posts with AI",
    description:
      "Create posts with AI, schedule them in minutes, and publish across Instagram, X, and LinkedIn from one place.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn("font-sans", geist.variable)}>
        <body className={`${inter.variable} ${caveat.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
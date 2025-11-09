import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Omar Elksass",
  },
  description: siteConfig.description,
  keywords: [
    "Omar Elksass",
    "Backend Developer",
    "Node.js",
    "NestJS",
    "API Design",
    "Microservices",
    "Cloud Engineering",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.social.linkedin }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Omar Elksass backend portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#020817",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} flex min-h-screen flex-col bg-transparent`}>
        <div className="relative flex-1">
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
            <div className="orbital-sheen" />
          </div>
          <MainNav />
          <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-28 sm:px-10">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

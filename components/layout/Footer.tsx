import Link from "next/link";

function Mail({ className = "" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
            <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Phone({ className = "" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M22 16.92v3a1 1 0 0 1-1 1 19 19 0 0 1-8.63-2.8 19 19 0 0 1-6-6A19 19 0 0 1 2 4a1 1 0 0 1 1-1h3.09a1 1 0 0 1 1 .75c.12.7.33 1.38.63 2.03a1 1 0 0 1-.24 1L6.6 8.6a16 16 0 0 0 6.4 6.4l1.82-1.82a1 1 0 0 1 1-.24c.65.3 1.33.51 2.03.63a1 1 0 0 1 .75 1V16.92z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Linkedin({ className = "" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
            <path d="M7 11v6M7 8v.01M11 11v6M11 8a1 1 0 0 1 1-1h3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Github({ className = "" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.45-1.11-1.45-.9-.62.07-.6.07-.6 1 .07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.21-.25-4.54-1.11-4.54-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.11 2.66.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

import { siteConfig } from "@/lib/site";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800/60 bg-slate-950/80">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
                <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-200">{siteConfig.name}</p>
                    <p className="text-xs text-slate-400">
                        {siteConfig.role} • {siteConfig.location}
                    </p>
                    <p className="text-xs text-slate-500">
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                </div>
                <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:text-sm">
                    <Link href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-sky-300">
                        <Mail className="h-4 w-4" />
                        {siteConfig.email}
                    </Link>
                    <Link href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-sky-300">
                        <Phone className="h-4 w-4" />
                        {siteConfig.phone}
                    </Link>
                    <Link href={siteConfig.social.linkedin} className="flex items-center gap-2 hover:text-sky-300" target="_blank" rel="noreferrer">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                    </Link>
                    <Link href={siteConfig.social.github} className="flex items-center gap-2 hover:text-sky-300" target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    );
}

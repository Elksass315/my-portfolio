'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { Github, Linkedin, Mail, MessageCircle, Code2 } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

const socialLinks = [
    {
        href: siteConfig.social.linkedin,
        label: "LinkedIn",
        icon: Linkedin,
    },
    {
        href: siteConfig.social.github,
        label: "GitHub",
        icon: Github,
    },
    {
        href: `mailto:${siteConfig.email}`,
        label: "Email",
        icon: Mail,
    },
    {
        href: siteConfig.whatsapp,
        label: "WhatsApp",
        icon: MessageCircle,
    },
];

export function MainNav() {
    const pathname = usePathname() || "/";

    return (
        <header className="fixed left-0 right-0 top-4 z-40 flex justify-center px-4">
            <div className="glass-card gradient-border flex w-full max-w-6xl flex-col gap-5 rounded-3xl px-6 py-4 shadow-lg shadow-sky-500/10 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-3">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
                        {/* <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30"
                        >
                            <Code2 className="h-4 w-4 text-white" />
                        </motion.div> */}
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex items-center text-lg"
                        >
                            <span className="text-slate-600 text-xl">&lt;</span>
                            <span className="text-slate-100">Elksass</span>
                            <span className="text-slate-600 text-xl">/&gt;</span>
                        </motion.span>
                    </Link>
                    <span className="hidden h-6 w-px bg-slate-700/40 sm:block" />
                    <span className="hidden text-sm text-slate-400 sm:block">
                        {siteConfig.role}
                    </span>
                </div>

                <nav className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                                    isActive ? "text-white" : "text-slate-400 hover:text-slate-100"
                                )}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="active-nav-pill"
                                        className="absolute inset-0 rounded-full bg-slate-800/80"
                                        transition={{ type: "spring", stiffness: 260, damping: 25 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noreferrer" : undefined}
                            className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/60 text-slate-300 transition-all hover:border-sky-400/70 hover:text-sky-300"
                            aria-label={label}
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>

                <nav className="flex flex-wrap gap-2 lg:hidden">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                        return (
                            <Link
                                key={`mobile-${link.href}`}
                                href={link.href}
                                className={clsx(
                                    "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                                    isActive
                                        ? "border-sky-400/70 bg-slate-800/80 text-slate-100"
                                        : "border-slate-700/60 bg-slate-900/60 text-slate-300 hover:border-sky-400/60 hover:text-sky-200"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Github, Linkedin, Mail, MessageCircle, Code2, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { useState, useEffect } from "react";

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Mobile Header */}
            <header className="fixed left-0 right-0 top-4 z-40 flex justify-center px-4 lg:hidden">
                <div className="glass-card gradient-border flex w-full max-w-6xl items-center justify-between gap-3 rounded-3xl px-4 py-3 shadow-lg shadow-sky-500/10">
                    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex items-center text-base"
                        >
                            <span className="text-slate-600 text-lg">&lt;</span>
                            <span className="text-slate-100">Elksass</span>
                            <span className="text-slate-600 text-lg">/&gt;</span>
                        </motion.span>
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/60 text-slate-300 transition-all hover:border-sky-400/70 hover:text-sky-300"
                        aria-label="Open menu"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed right-0 top-0 z-50 h-full w-[280px] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border-l border-slate-800/50 shadow-2xl lg:hidden"
                        >
                            <div className="flex flex-col gap-8 p-6">
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
                                        <span className="flex items-center text-lg">
                                            <span className="text-slate-600 text-xl">&lt;</span>
                                            <span className="text-slate-100">Elksass</span>
                                            <span className="text-slate-600 text-xl">/&gt;</span>
                                        </span>
                                    </Link>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/60 bg-slate-800/60 text-slate-300 transition-all hover:border-sky-400/70 hover:text-sky-300"
                                        aria-label="Close menu"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Role */}
                                <div className="text-sm text-slate-400 border-b border-slate-800/50 pb-4">
                                    {siteConfig.role}
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex flex-col gap-2">
                                    {navLinks.map((link) => {
                                        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={clsx(
                                                    "relative rounded-lg px-4 py-3 text-sm font-medium transition-all",
                                                    isActive
                                                        ? "bg-slate-800/80 text-sky-300 border border-sky-400/30"
                                                        : "text-slate-300 hover:bg-slate-800/50 hover:text-slate-100"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        );
                                    })}
                                </nav>

                                {/* Social Links */}
                                <div className="mt-auto pt-6 border-t border-slate-800/50">
                                    <p className="text-xs text-slate-500 mb-3">Connect with me</p>
                                    <div className="flex flex-wrap gap-2">
                                        {socialLinks.map(({ href, icon: Icon, label }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                target={href.startsWith("http") ? "_blank" : undefined}
                                                rel={href.startsWith("http") ? "noreferrer" : undefined}
                                                className="group flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-800/60 px-3 py-2 text-xs text-slate-300 transition-all hover:border-sky-400/70 hover:text-sky-300"
                                                aria-label={label}
                                            >
                                                <Icon className="h-4 w-4" />
                                                <span>{label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Header */}
            <header className="fixed left-0 right-0 top-4 z-40 hidden justify-center px-4 lg:flex">
                <div className="glass-card gradient-border flex w-full max-w-6xl flex-row items-center justify-between gap-8 rounded-3xl px-6 py-3 shadow-lg shadow-sky-500/10">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
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
                        <span className="h-6 w-px bg-slate-700/40" />
                        <span className="text-sm text-slate-400">
                            {siteConfig.role}
                        </span>
                    </div>

                    <nav className="flex items-center gap-1">
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

                    <div className="flex items-center gap-3">
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
                </div>
            </header>
        </>
    );
}

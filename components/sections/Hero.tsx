'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { heroHighlights, siteConfig } from "@/lib/site";

const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

export function Hero() {
    return (
        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-900/40 p-10 shadow-2xl shadow-sky-500/10 sm:p-14">
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
                    animate={{
                        x: [0, 20, -10, 0],
                        y: [0, -10, 10, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute right-[5%] top-[10%] h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"
                    animate={{
                        x: [0, -30, 15, 0],
                        y: [0, 15, -15, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <div className="floating absolute right-20 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full border border-slate-700/60 bg-slate-900/60 sm:block" />
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <motion.div initial="hidden" animate="show" variants={containerVariants} className="space-y-6">
                    <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                        Available for backend leadership roles
                    </span>
                    <div className="space-y-3">
                        <motion.h1
                            className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl"
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        >
                            Omar Elksass — crafting resilient backend platforms that scale with confidence.
                        </motion.h1>
                        <motion.p
                            className="max-w-xl text-base text-slate-300 sm:text-lg"
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
                        >
                            I am a {siteConfig.role} specializing in distributed systems, API ecosystems, and cloud-native deployments. From strategy to shipping, I ensure performance, observability, and tangible business outcomes.
                        </motion.p>
                    </div>
                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
                    >
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                        >
                            View Projects
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/70 hover:text-sky-200"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                    <motion.div
                        className="grid gap-6 sm:grid-cols-3"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, y: 28 },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.15 },
                            },
                        }}
                    >
                        {heroHighlights.map((highlight) => (
                            <motion.div
                                key={highlight.title}
                                className="glass-card rounded-2xl p-5"
                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                            >
                                <h3 className="text-sm font-semibold text-slate-100">{highlight.title}</h3>
                                <p className="mt-3 text-xs text-slate-400">{highlight.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="flex flex-wrap items-center gap-4 text-sm text-slate-300"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
                    >
                        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sky-300">
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                        </a>
                        <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sky-300">
                            <Github className="h-4 w-4" />
                            GitHub
                        </a>
                        <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-sky-300">
                            <Mail className="h-4 w-4" />
                            Email
                        </a>
                        <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sky-300">
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="relative flex justify-center"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative w-full max-w-sm">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/40 via-slate-900/80 to-slate-900/10 blur-3xl" />
                        <div className="gradient-border glass-card relative overflow-hidden rounded-3xl">
                            <Image
                                src="/images/portrait-placeholder.png"
                                alt="Placeholder portrait of Omar Elksass"
                                width={600}
                                height={720}
                                priority
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-slate-700/60 bg-slate-950/80 px-4 py-3 text-xs text-slate-300">
                                Trusted to launch resilient platforms across finance, travel, and community experiences.
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

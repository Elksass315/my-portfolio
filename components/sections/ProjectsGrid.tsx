'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projectShowcase } from "@/lib/site";

const gridVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
    },
};

interface ProjectsGridProps {
    limit?: number;
}

export function ProjectsGrid({ limit }: ProjectsGridProps) {
    const projects = limit ? projectShowcase.slice(0, limit) : projectShowcase;

    return (
        <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={gridVariants}
            initial="hidden"
            animate="show"
        >
            {projects.map((project) => (
                <motion.article
                    key={project.title}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/70 transition-shadow hover:shadow-2xl hover:shadow-sky-500/10"
                    whileHover={{ translateY: -6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                        <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 90vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                            <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                        </div>
                        <ul className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                            {project.tech.map((item) => (
                                <li key={item} className="rounded-full bg-slate-800/80 px-3 py-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-2 text-xs text-slate-400">
                            {project.stats.map((fact) => (
                                <li key={fact} className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400/80" />
                                    <span>{fact}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto pt-2">
                            
                            {project.linkUrl && (
                                <Link
                                    href={project.linkUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                                >
                                    {project.linkLabel}
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            )}
                        </div>
                    </div>
                </motion.article>
            ))}
        </motion.div>
    );
}

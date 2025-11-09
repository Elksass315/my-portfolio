'use client';

import { motion } from "framer-motion";
import { experienceTimeline } from "@/lib/site";

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.12,
            duration: 0.7,
            ease: "easeOut",
        },
    }),
};

export function ExperienceTimelineSection() {
    return (
        <section className="relative overflow-hidden rounded-[2.25rem] border border-slate-800/70 bg-slate-950/70 p-10 shadow-xl shadow-sky-500/10">
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
                />
                <motion.div
                    className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
                />
            </div>
            <div className="relative mx-auto flex max-w-4xl flex-col gap-12">
                {experienceTimeline.map((role, index) => (
                    <motion.div
                        key={role.company}
                        className="relative grid gap-6 rounded-3xl border border-slate-800/60 bg-slate-950/80 p-8 lg:grid-cols-[0.4fr_1fr]"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        custom={index}
                        whileHover={{ rotateX: 4, rotateY: -4, translateY: -4 }}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        style={{ transformPerspective: 1200 }}
                    >
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{role.period}</p>
                            <h3 className="text-lg font-semibold text-slate-100">{role.company}</h3>
                            <p className="text-sm text-sky-300">{role.role}</p>
                            <div className="flex flex-wrap gap-2 pt-3 text-[11px] text-slate-300">
                                {role.tech.map((tech) => (
                                    <span key={tech} className="rounded-full bg-slate-800/80 px-3 py-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-slate-300">
                            <p className="text-slate-300/90">{role.summary}</p>
                            <ul className="space-y-3 text-xs text-slate-400">
                                {role.achievements.map((achievement) => (
                                    <li key={achievement} className="flex gap-3">
                                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-300" />
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <span className="absolute left-4 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-gradient-to-b from-sky-400 via-sky-300/40 to-transparent md:block" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

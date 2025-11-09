'use client';

import { motion } from "framer-motion";
import { skillTags } from "@/lib/site";

const tagVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: (index: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: index * 0.04, duration: 0.45, ease: "easeOut" },
    }),
};

export function SkillCloud() {
    return (
        <motion.ul
            className="glass-card flex flex-wrap gap-3 rounded-[2rem] border border-slate-800/60 p-8"
            initial="hidden"
            animate="show"
        >
            {skillTags.map((skill, index) => (
                <motion.li
                    key={skill}
                    className="rounded-full border border-slate-700/60 bg-slate-950/80 px-4 py-2 text-sm text-slate-200"
                    variants={tagVariants}
                    custom={index}
                >
                    {skill}
                </motion.li>
            ))}
        </motion.ul>
    );
}

import { marqueeTech } from "@/lib/site";

export function TechTicker() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/60 p-5">
            <div className="flex items-center gap-2 pb-4 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Core Practices
            </div>
            <div className="relative h-8 overflow-hidden">
                <div className="tech-marquee-track text-sm text-slate-300">
                    {[...marqueeTech, ...marqueeTech].map((tech, index) => (
                        <span key={`${tech}-${index}`} className="rounded-full bg-slate-800/80 px-4 py-1">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

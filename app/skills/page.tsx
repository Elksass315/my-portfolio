import type { Metadata } from "next";
import { SkillCloud } from "@/components/sections/SkillCloud";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig, skillTags } from "@/lib/site";

export const metadata: Metadata = {
    title: "Skills",
    description:
        "Backend engineering skill set for Omar Elksass featuring Node.js, NestJS, databases, cloud infrastructure, CI/CD, and performance-first delivery practices.",
    openGraph: {
        title: "Skills | Omar Elksass",
        description:
            "Explore the backend engineering skills that power Omar Elksass' work: Node.js, NestJS, microservices, database tuning, observability, and cloud automation.",
        url: `${siteConfig.url}/skills`,
    },
    alternates: {
        canonical: `${siteConfig.url}/skills`,
    },
};

const skillsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Skills — Omar Elksass",
    url: `${siteConfig.url}/skills`,
    itemListElement: skillTags.map((skill, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: skill,
    })),
};

export default function SkillsPage() {
    return (
        <div className="space-y-8">
            <JsonLd id="skills-jsonld" data={skillsJsonLd} />
            <header className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-sky-300">Skills</p>
                <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                    Proven tooling and practices for resilient backend ecosystems.
                </h1>
                <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
                    Omar combines modern JavaScript frameworks, database expertise, and cloud automation with disciplined delivery. Performance, security, and maintainability remain first-class requirements.
                </p>
            </header>
            <SkillCloud />
        </div>
    );
}

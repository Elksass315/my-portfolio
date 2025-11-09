import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { projectShowcase, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Review Omar Elksass' backend project portfolio including The Poultry, Travel Sync, Estqrar, and Hasala — each engineered for scale, resilience, and measurable impact.",
    openGraph: {
        title: "Backend Projects | Omar Elksass",
        description:
            "Backend project highlights from Omar Elksass featuring AI-enabled poultry solutions, travel automation, community platforms, and rewards ecosystems.",
        url: `${siteConfig.url}/projects`,
    },
    alternates: {
        canonical: `${siteConfig.url}/projects`,
    },
};

const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects — Omar Elksass",
    url: `${siteConfig.url}/projects`,
    hasPart: projectShowcase.map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.linkUrl,
    })),
};

export default function ProjectsPage() {
    return (
        <div className="space-y-8">
            <JsonLd id="projects-jsonld" data={projectsJsonLd} />
            <header className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-sky-300">Projects</p>
                <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                    Platforms architected for scale, performance, and delightful developer experience.
                </h1>
                <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
                    Each initiative pairs thoughtful architecture with rapid experimentation—ensuring feature velocity never compromises resilience or security.
                </p>
            </header>
            <ProjectsGrid />
        </div>
    );
}

import type { Metadata } from "next";
import { ExperienceTimelineSection } from "@/components/sections/ExperienceTimeline";
import { TechTicker } from "@/components/sections/TechTicker";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
    title: "Experience",
    description:
        "Explore Omar Elksass' backend engineering journey across AIOT Groupe, Estqrar, and Travel Sync, delivering reliable microservices, API platforms, and cloud automation.",
    openGraph: {
        title: "Backend Experience | Omar Elksass",
        description:
            "Timeline of backend roles Omar Elksass has led, featuring scalable Node.js, microservices, and observability-driven delivery across multiple industries.",
        url: `${siteConfig.url}/experience`,
    },
    alternates: {
        canonical: `${siteConfig.url}/experience`,
    },
};

const experienceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Omar Elksass Experience",
    url: `${siteConfig.url}/experience`,
    about: {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.role,
    },
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteConfig.url,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Experience",
                item: `${siteConfig.url}/experience`,
            },
        ],
    },
};

export default function ExperiencePage() {
    return (
        <div className="space-y-12">
            <JsonLd id="experience-jsonld" data={experienceJsonLd} />
            <header className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-sky-300">Experience</p>
                <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                    Delivering backend ecosystems that stay observable, secure, and always production-ready.
                </h1>
                <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
                    From web platforms to social products, Omar designs service boundaries, optimizes schemas, and builds deployment pipelines that unlock reliable growth.
                </p>
            </header>
            <ExperienceTimelineSection />
            <TechTicker />
        </div>
    );
}

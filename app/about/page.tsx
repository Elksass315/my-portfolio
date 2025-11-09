import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Omar Elksass, a mid-level backend developer from Egypt specialising in scalable Node.js, NestJS, and cloud-native architectures that power high-growth products.",
    openGraph: {
        title: "About Omar Elksass",
        description:
            "Omar Elksass is a backend engineer crafting resilient microservices, performance-driven APIs, and secure infrastructure for growth-minded teams.",
        url: `${siteConfig.url}/about`,
    },
    alternates: {
        canonical: `${siteConfig.url}/about`,
    },
};

const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Omar Elksass",
    url: `${siteConfig.url}/about`,
    mainEntity: {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        description:
            "Mid-level backend developer with expertise in Node.js, NestJS, and cloud-native platforms for scalable production workloads.",
    },
};

const highlights = [
    "2+ years designing and maintaining backend systems that meet demanding SLAs",
    "Delivered multiple production applications from proof-of-concept to post-launch iteration",
    "Fluent across relational and NoSQL databases with a focus on schema governance and reliability",
    "Champion for performance, security, documentation, and platform observability",
];

export default function AboutPage() {
    return (
        <div className="space-y-10">
            <JsonLd id="about-jsonld" data={aboutJsonLd} />
            <header className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-sky-300">About Omar</p>
                <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                    Backend craftsmanship rooted in clarity, performance, and thoughtful collaboration.
                </h1>
            </header>
            <section className="space-y-6 text-sm text-slate-300 sm:text-base">
                <p>
                    Omar Elksass is a {siteConfig.role} with more than two years of hands-on experience building secure, measurable, and highly performant server-side platforms. He thrives on translating ideas into resilient architectures that are easy to iterate on and easier to trust.
                </p>
                <p>
                    Adept with Node.js, Express.js, and NestJS, Omar builds API ecosystems and microservices that balance rapid delivery with technical rigor. His toolkit spans schema design, asynchronous messaging, and infrastructure automation, ensuring every release honours scalability and maintainability.
                </p>
                <p>
                    Based in Egypt, Omar collaborates across product, design, and frontend teams to align business goals with engineering impact. He invests heavily in clean architecture, code reviews, mentoring, and documentation, believing that strong communication is as critical as strong code.
                </p>
            </section>
            <section className="glass-card rounded-3xl border border-slate-800/60 p-8">
                <h2 className="text-xl font-semibold text-slate-100">Key Highlights</h2>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                    {highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-400" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

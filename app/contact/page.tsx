import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Reach out to Omar Elksass for backend engineering opportunities, collaborations, or technical consultations. Connect via email, phone, LinkedIn, GitHub, or WhatsApp.",
    openGraph: {
        title: "Contact Omar Elksass",
        description:
            "Connect with backend engineer Omar Elksass to discuss API architecture, microservices, or upcoming product initiatives.",
        url: `${siteConfig.url}/contact`,
    },
    alternates: {
        canonical: `${siteConfig.url}/contact`,
    },
};

const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Omar Elksass",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
        "@type": "Person",
        name: siteConfig.name,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
            "@type": "PostalAddress",
            addressCountry: "EG",
        },
        sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.whatsapp],
    },
};

const contactMethods = [
    {
        label: "Email",
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        icon: Mail,
    },
    {
        label: "Phone",
        value: siteConfig.phone,
        href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
        icon: Phone,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/omar-elksass",
        href: siteConfig.social.linkedin,
        icon: Linkedin,
    },
    {
        label: "GitHub",
        value: "github.com/Elksass315",
        href: siteConfig.social.github,
        icon: Github,
    },
];

export default function ContactPage() {
    return (
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <JsonLd id="contact-jsonld" data={contactJsonLd} />
            <div className="space-y-6">
                <p className="text-sm uppercase tracking-widest text-sky-300">Contact</p>
                <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                    Let’s forge the next resilient platform together.
                </h1>
                <p className="text-sm text-slate-300 sm:text-base">
                    Whether you are scaling a new product, refining architecture, or need a second set of eyes on a critical migration, Omar can help you move faster with confidence.
                </p>
                <div className="space-y-4">
                    {contactMethods.map(({ label, value, href, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            className="group flex items-center gap-3 rounded-3xl border border-slate-800/60 bg-slate-950/70 px-5 py-4 text-sm text-slate-200 transition hover:border-sky-400/60 hover:text-sky-200"
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noreferrer" : undefined}
                        >
                            <Icon className="h-5 w-5 text-sky-300 transition group-hover:text-sky-200" />
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</span>
                                <span>{value}</span>
                            </div>
                        </Link>
                    ))}
                    <div className="flex items-center gap-3 rounded-3xl border border-slate-800/60 bg-slate-950/70 px-5 py-4 text-sm text-slate-200">
                        <MapPin className="h-5 w-5 text-sky-300" />
                        <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Location</span>
                            <span>{siteConfig.location}</span>
                        </div>
                    </div>
                    <Link
                        href={siteConfig.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
                    >
                        Message on WhatsApp
                        <Send className="h-4 w-4" />
                    </Link>
                </div>
            </div>
            <div className="glass-card rounded-[2.5rem] border border-slate-800/60 p-8">
                <h2 className="text-xl font-semibold text-slate-100">Project Inquiry</h2>
                <p className="mt-3 text-sm text-slate-300">
                    Share a few details about your project requirements, timelines, or technical challenges. Omar will respond within two business days.
                </p>
                <div className="mt-6">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

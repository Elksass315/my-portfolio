import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SkillsTicker } from "@/components/sections/SkillsTicker";
import { ExperienceTimelineSection } from "@/components/sections/ExperienceTimeline";
import { TechTicker } from "@/components/sections/TechTicker";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { experienceTimeline, projectShowcase, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio Overview",
  description:
    "Discover Omar Elksass' backend engineering portfolio featuring scalable APIs, microservices, and production-grade deployments across AI, travel, and community platforms.",
  openGraph: {
    title: "Omar Elksass | Backend Engineering Portfolio",
    description:
      "Backend engineering portfolio for Omar Elksass showcasing resilient APIs, microservices, and cloud-native delivery across AI, travel, and community products.",
    url: siteConfig.url,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const stats = [
  {
    value: "75K+",
    label: "Users supported",
    description: "Reliable platforms orchestrating real-time and transactional experiences without downtime surprises.",
  },
  {
    value: "40%",
    label: "Latency improvements",
    description: "Measured reductions in response times through schema tuning, caching layers, and observability-led fixes.",
  },
  {
    value: "10+",
    label: "Production launches",
    description: "From MVP to scale, guiding architecture, delivery, and stabilization across industry verticals.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  url: siteConfig.url,
  sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.whatsapp],
  address: {
    "@type": "PostalAddress",
    addressCountry: "EG",
  },
  knowsAbout: [
    "Backend Engineering",
    "Node.js",
    "API Architecture",
    "Microservices",
    "Cloud Deployments",
    "Database Optimization",
  ],
  worksFor: {
    "@type": "Organization",
    name: "AIOT Groupe",
  },
  alumniOf: "Mansoura University",
};

export default function Home() {
  const featuredExperience = experienceTimeline[0];
  const featuredProjects = projectShowcase.slice(0, 2);
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

  return (
    <div className="space-y-20">
      <JsonLd id="person-jsonld" data={personJsonLd} />
      <Hero />

      <section className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-3xl border border-slate-800/60 p-6">
            <p className="text-3xl font-semibold text-slate-100">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-slate-300">{stat.label}</p>
            <p className="mt-3 text-xs text-slate-400">{stat.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card rounded-3xl border border-slate-800/60 p-8">
          <h2 className="text-xl font-semibold text-slate-100">Current Focus</h2>
          <p className="mt-4 text-sm text-slate-300">
            {featuredExperience.summary}
          </p>
          <ul className="mt-6 space-y-3 text-xs text-slate-400">
            {featuredExperience.achievements.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/experience"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
          >
            Explore the full experience timeline
          </Link>
        </div>
        <div className="glass-card rounded-3xl border border-slate-800/60 p-8">
          <h2 className="text-xl font-semibold text-slate-100">Featured Builds</h2>
          <div className="mt-6 space-y-5">
            {featuredProjects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-5">
                <h3 className="text-base font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-2 text-xs text-slate-400">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-800/80 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
          >
            View all projects
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-widest text-sky-300">Skills</p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Breadth of tools, databases, and delivery practices powering resilient services.
          </h2>
          <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
            Explore the production-ready stack Omar relies on for fault-tolerant backends, observability-driven workflows, and iterative product delivery.
          </p>
        </div>
        <SkillsTicker />
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
        >
          Review the full skills index
        </Link>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-widest text-sky-300">Experience</p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Engineering leadership across Web, travel, and community platforms.
          </h2>
          <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
            A timeline of roles where Omar guided architecture, performance, and release cadence to keep mission-critical systems stable.
          </p>
        </div>
        <ExperienceTimelineSection />
        <TechTicker />
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
        >
          Explore the detailed timeline
        </Link>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-widest text-sky-300">Projects</p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Production case studies that blend velocity with long-term maintainability.
          </h2>
          <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
            These launches highlight resilient APIs, thoughtful data modeling, and customer-first delivery outcomes.
          </p>
        </div>
        <ProjectsGrid limit={4} />
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
        >
          View all projects
        </Link>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-sky-300">Contact</p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Share your roadmap and align on the next delivery milestone.
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Ready to modernize infrastructure, extend a platform, or launch a new product? I responds within two business days.
          </p>
          <div className="space-y-4">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a
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
              </a>
            ))}
          </div>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
          >
            Message on WhatsApp
            <Send className="h-4 w-4" />
          </a>
        </div>
        <div className="glass-card rounded-[2.5rem] border border-slate-800/60 p-8">
          <h3 className="text-xl font-semibold text-slate-100">Project Inquiry</h3>
          <p className="mt-3 text-sm text-slate-300">
            Share a few details about your project requirements, timelines, or technical challenges.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

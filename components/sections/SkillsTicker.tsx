import { skillTags } from "@/lib/site";
import {
    Server,
    Code,
    Braces,
    Database,
    Cloud,
    Container,
    Settings,
    Zap,
    Lock,
    Network,
    MessageSquare,
    GitBranch,
    CheckCircle2
} from "lucide-react";

const skillIcons: Record<string, React.ReactNode> = {
    "Node.js": <Server className="h-4 w-4" />,
    "Express.js": <Zap className="h-4 w-4" />,
    "NestJS": <Server className="h-4 w-4" />,
    "TypeScript": <Code className="h-4 w-4" />,
    "JavaScript (ES6+)": <Code className="h-4 w-4" />,
    "MongoDB": <Database className="h-4 w-4" />,
    "PostgreSQL": <Database className="h-4 w-4" />,
    "Redis": <Database className="h-4 w-4" />,
    "Firebase": <Cloud className="h-4 w-4" />,
    "Docker": <Container className="h-4 w-4" />,
    "Nginx": <Network className="h-4 w-4" />,
    "AWS": <Cloud className="h-4 w-4" />,
    "CI/CD": <GitBranch className="h-4 w-4" />,
    "Jest": <CheckCircle2 className="h-4 w-4" />,
    "Microservices": <Settings className="h-4 w-4" />,
    "REST APIs": <Braces className="h-4 w-4" />,
    "Socket.IO": <MessageSquare className="h-4 w-4" />,
    "Agile Scrum": <Settings className="h-4 w-4" />,
};

export function SkillsTicker() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/60 p-5">
            <div className="relative h-10 overflow-hidden">
                <div className="tech-marquee-track text-sm text-slate-300">
                    {[...skillTags, ...skillTags].map((tech, index) => (
                        <span key={`${tech}-${index}`} className="flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2">
                            <span className="text-sky-400">{skillIcons[tech] || <Code className="h-4 w-4" />}</span>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

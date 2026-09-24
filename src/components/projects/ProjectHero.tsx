import type { Project } from "@/types/project";
export function ProjectHero({ project }: { project: Project }) { return <header className="hero"><div className="container"><span className="eyebrow">Project</span><h1>{project.title}</h1><p>{project.summary}</p></div></header>; }

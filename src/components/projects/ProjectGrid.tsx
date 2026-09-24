import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
export function ProjectGrid({ projects }: { projects: Project[] }) { return <div className="grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>; }

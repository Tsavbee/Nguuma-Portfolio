import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
export default function ProjectsPage() { return <main className="section"><Container><span className="eyebrow">Archive</span><h1>All projects</h1><ProjectGrid projects={projects} /></Container></main>; }

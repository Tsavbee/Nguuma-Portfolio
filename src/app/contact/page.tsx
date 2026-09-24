import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";
export default function ContactPage() { return <main className="section"><Container><span className="eyebrow">Contact</span><h1>Let&apos;s talk.</h1><p>Reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.</p></Container></main>; }
